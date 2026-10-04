/* templates.js must load first in the browser; under Node (QA) require it. */
if (typeof require !== "undefined" && typeof acceptSubject === "undefined") {
  Object.assign(globalThis, require("./templates.js"));
}

/* Chez Lan — respond page: one-tap accept/refuse for reservation requests.
   Opened from the links in the owner's booking notification email.

   HOW SENDING WORKS
   - Default (works today, no setup): the big button is a real mailto: link.
     Tapping it opens the owner's mail app with the reply already written —
     they just tap Send. No copying.
   - Upgrade (true one-click, zero extra taps): connect EmailJS once
     (https://www.emailjs.com — free ~200 emails/month), then fill in the
     three IDs below. The button then sends instantly from the restaurant's
     Gmail address via the EmailJS API. Setup:
       1. Email Services → Add New Service → Gmail → connect
          andypwndbunny@gmail.com → note the Service ID
       2. Email Templates → Create New Template:
            To Email: {{to_email}} | Subject: {{subject}} |
            Content: {{message}} | Reply-To: {{reply_to}}
          → note the Template ID
       3. Account → API Keys → copy the Public Key
       4. Paste the three values into EMAILJS below and redeploy.
*/
const EMAILJS = { publicKey: "cCsaILV3qykpJRUkq", serviceId: "chezlan_email", templateId: "template_chezlan" };
const RESTO_SENDER = "andypwndbunny@gmail.com";

const I18N = {
  fr: {
    "nav.home": "Accueil", "nav.menu": "Menu", "nav.reserve": "Réserver",
    "rp.title": "Répondre à une réservation",
    "rp.acceptTitle": "✅ Accepter cette réservation",
    "rp.refuseTitle": "❌ Refuser cette réservation",
    "rp.summary": "Détails de la réservation",
    "rp.name": "Nom", "rp.date": "Date", "rp.time": "Heure", "rp.guests": "Convives",
    "rp.phone": "Téléphone", "rp.email": "Courriel",
    "rp.msgTitle": "Message qui sera envoyé au client",
    "rp.sendMailto": "📧 Ouvrir dans mon courriel",
    "rp.sendAutoAccept": "✅ Envoyer la confirmation",
    "rp.sendAutoRefuse": "❌ Envoyer le refus",
    "rp.noteMailto": "Cela ouvre votre application courriel avec le message déjà rédigé — appuyez sur Envoyer.",
    "rp.noteAuto": "Envoi instantané au client, sans autre étape.",
    "rp.sending": "Envoi en cours…",
    "rp.sent": "Envoyé! Le client a reçu votre réponse.",
    "rp.sendFail": "L'envoi automatique a échoué — le bouton ci-dessous ouvre votre courriel avec le message pré-rempli.",
    "rp.badLink": "Lien invalide ou incomplet. Ouvrez le lien depuis le courriel de réservation.",
    "rp.footer": "Chez Lan · 1421 Chemin Gascon, Terrebonne · (450) 492-1416"
  },
  en: {
    "nav.home": "Home", "nav.menu": "Menu", "nav.reserve": "Reserve",
    "rp.title": "Respond to a reservation",
    "rp.acceptTitle": "✅ Accept this reservation",
    "rp.refuseTitle": "❌ Decline this reservation",
    "rp.summary": "Reservation details",
    "rp.name": "Name", "rp.date": "Date", "rp.time": "Time", "rp.guests": "Guests",
    "rp.phone": "Phone", "rp.email": "Email",
    "rp.msgTitle": "Message that will be sent to the guest",
    "rp.sendMailto": "📧 Open in my email app",
    "rp.sendAutoAccept": "✅ Send the confirmation",
    "rp.sendAutoRefuse": "❌ Send the decline",
    "rp.noteMailto": "This opens your email app with the message already written — just tap Send.",
    "rp.noteAuto": "Instant send to the guest, no further step.",
    "rp.sending": "Sending…",
    "rp.sent": "Sent! The guest has received your reply.",
    "rp.sendFail": "Automatic send failed — the button below opens your email app with the message pre-filled.",
    "rp.badLink": "Invalid or incomplete link. Please open the link from the reservation email.",
    "rp.footer": "Chez Lan · 1421 Chemin Gascon, Terrebonne · (450) 492-1416"
  }
};
let lang = "fr";
const $ = (s) => document.querySelector(s);
const t = (k) => (I18N[lang] && I18N[lang][k]) || I18N.fr[k] || k;
function validEmail(v) { return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v); }

/* Parse + validate the query params from the email link. Returns null if bad. */
function getParams(search) {
  const q = new URLSearchParams(search);
  const p = {
    action: q.get("a"),
    to: q.get("to") || "",
    name: q.get("n") || "",
    date: q.get("d") || "",
    time: q.get("t") || "",
    guests: parseInt(q.get("g"), 10),
    phone: q.get("p") || ""
  };
  if (p.action !== "accept" && p.action !== "refuse") return null;
  if (!validEmail(p.to) || !p.name) return null;
  if (!/^\d{4}-\d{2}-\d{2}$/.test(p.date)) return null;
  const tm = /^(\d{2}):(\d{2})$/.exec(p.time);
  if (!tm || +tm[1] > 23 || +tm[2] > 59) return null;
  if (!(p.guests >= 1 && p.guests <= 30)) return null;
  return p;
}

function buildMailtoHref(p) {
  const subj = p.action === "accept" ? acceptSubject() : declineSubject();
  const body = p.action === "accept"
    ? buildAcceptBody(p) : buildDeclineBody(p);
  return `mailto:${p.to}?subject=${encodeURIComponent(subj)}&body=${encodeURIComponent(body)}`;
}

async function sendViaEmailJS(p) {
  const subj = p.action === "accept" ? acceptSubject() : declineSubject();
  const body = p.action === "accept" ? buildAcceptBody(p) : buildDeclineBody(p);
  const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      service_id: EMAILJS.serviceId,
      template_id: EMAILJS.templateId,
      user_id: EMAILJS.publicKey,
      template_params: {
        to_email: p.to,
        reply_to: RESTO_SENDER,
        subject: subj,
        message: body
      }
    })
  });
  if (!res.ok) throw new Error("emailjs " + res.status);
}

function applyLang() {
  document.documentElement.lang = lang;
  $("#langBtn").textContent = lang === "fr" ? "EN" : "FR";
  document.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
  render();
}

let PARAMS = null;
function render() {
  if (!PARAMS) return;
  const p = PARAMS, accept = p.action === "accept";
  const banner = $("#actionBanner");
  banner.className = "rp-banner " + (accept ? "accept" : "refuse");
  banner.textContent = accept ? t("rp.acceptTitle") : t("rp.refuseTitle");
  $("#sName").textContent = p.name;
  $("#sDate").textContent = lang === "fr" ? tplDateFR(p.date) : tplDateEN(p.date);
  $("#sTime").textContent = lang === "fr" ? tplTimeFR(p.time) : tplTimeEN(p.time);
  $("#sGuests").textContent = lang === "fr" ? tplGuestsFR(p.guests) : tplGuestsEN(p.guests);
  $("#sPhone").textContent = p.phone;
  $("#sEmail").textContent = p.to;
  const body = accept ? buildAcceptBody(p) : buildDeclineBody(p);
  $("#msgPreview").textContent = body;
  const auto = !!EMAILJS.publicKey;
  const btn = $("#sendBtn");
  btn.textContent = auto
    ? (accept ? t("rp.sendAutoAccept") : t("rp.sendAutoRefuse"))
    : t("rp.sendMailto");
  if (!auto) btn.href = buildMailtoHref(p);
  $("#sendNote").textContent = auto ? t("rp.noteAuto") : t("rp.noteMailto");
}

document.addEventListener("DOMContentLoaded", () => {
  $("#navToggle").addEventListener("click", () => $("#navLinks").classList.toggle("open"));
  $("#langBtn").addEventListener("click", () => { lang = lang === "fr" ? "en" : "fr"; applyLang(); });
  PARAMS = getParams(location.search);
  if (!PARAMS) {
    document.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
    $("#badLink").style.display = "block";
    return;
  }
  applyLang();
  $("#resWrap").style.display = "block";

  $("#sendBtn").addEventListener("click", async (ev) => {
    if (!EMAILJS.publicKey) return; // plain mailto link — let the browser handle it
    ev.preventDefault();
    const btn = $("#sendBtn");
    btn.style.pointerEvents = "none";
    const orig = btn.textContent;
    btn.textContent = t("rp.sending");
    try {
      await sendViaEmailJS(PARAMS);
      const done = $("#doneBox");
      done.textContent = t("rp.sent");
      done.style.display = "block";
      btn.style.display = "none";
      $("#sendNote").style.display = "none";
    } catch (e) {
      btn.textContent = orig;
      btn.style.pointerEvents = "";
      btn.href = buildMailtoHref(PARAMS); // fall back to mailto
      const err = $("#errBox");
      err.textContent = t("rp.sendFail");
      err.style.display = "block";
    }
  });
});

if (typeof module !== "undefined") module.exports = { getParams, buildMailtoHref, sendViaEmailJS, I18N };
