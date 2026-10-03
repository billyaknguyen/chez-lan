/* Chez Lan — reservation form.
   Bookings are emailed (free) to the restaurant via FormSubmit's AJAX endpoint.
   The owner gets one-click ACCEPT / DECLINE links that open a pre-written
   reply to the client, and can also just hit "Reply" (Reply-To = client). */
const UBER_URL = "https://www.ubereats.com/ca/store/chez-lan-terrebonne/VFCgO5uMVUG-vYplW3tc1w";
const RES_ENDPOINT = "https://formsubmit.co/ajax/minhtuan9@yahoo.com";
const RESTO_PHONE = "(450) 492-1416";

// Seatings every 30 min, 16:15 -> 19:45 (kitchen closes 20:30)
const SLOTS = ["16:15", "16:45", "17:15", "17:45", "18:15", "18:45", "19:15", "19:45"];
const MAX_DAYS_AHEAD = 60;

const I18N = {
  fr: {
    "nav.home": "Accueil", "nav.menu": "Menu", "nav.info": "Nous trouver",
    "nav.book": "Réserver", "nav.order": "Commander",
    "hero.kicker": "Cuisine vietnamienne · Terrebonne",
    "res.title": "Réserver une <em>table</em>",
    "res.sub": "Choisissez votre date et votre heure — nous vous confirmerons par courriel.",
    "res.date": "Date", "res.time": "Heure", "res.guests": "Convives",
    "res.name": "Nom", "res.namePh": "Votre nom",
    "res.phone": "Téléphone",
    "res.email": "Courriel", "res.emailPh": "vous@exemple.com",
    "res.notes": "Notes (optionnel)", "res.notesPh": "Allergies, poussette, occasion spéciale…",
    "res.submit": "Envoyer la demande", "res.sending": "Envoi en cours…",
    "res.note": "Nous vous répondrons par courriel pour confirmer votre réservation.",
    "res.successT": "Demande envoyée!",
    "res.new": "Faire une autre demande",
    "res.errorSend": "Oups — l'envoi a échoué. Vérifiez votre connexion ou appelez-nous au (450) 492-1416.",
    "res.errorFields": "Veuillez remplir tous les champs requis correctement.",
    "res.todayFull": "Complet pour aujourd'hui — veuillez choisir une autre date.",
    "res.infoT": "Bon à savoir",
    "res.hours": "Ouvert tous les jours · 16 h 15 – 20 h 30",
    "res.bigparty": "11 convives ou plus? Appelez-nous directement!",
    "info.phone": "Téléphone", "info.addr": "Adresse",
    "foot.note": "Menu et prix tirés d'Uber Eats en octobre 2026 — sujets à changement. Appelez-nous pour confirmer.",
    "foot.rights": "© 2026 Chez Lan · Terrebonne, Québec"
  },
  en: {
    "nav.home": "Home", "nav.menu": "Menu", "nav.info": "Find us",
    "nav.book": "Book a table", "nav.order": "Order",
    "hero.kicker": "Vietnamese cuisine · Terrebonne",
    "res.title": "Book a <em>table</em>",
    "res.sub": "Pick your date and time — we'll confirm by email.",
    "res.date": "Date", "res.time": "Time", "res.guests": "Guests",
    "res.name": "Name", "res.namePh": "Your name",
    "res.phone": "Phone",
    "res.email": "Email", "res.emailPh": "you@example.com",
    "res.notes": "Notes (optional)", "res.notesPh": "Allergies, stroller, special occasion…",
    "res.submit": "Send request", "res.sending": "Sending…",
    "res.note": "We'll reply by email to confirm your reservation.",
    "res.successT": "Request sent!",
    "res.new": "Make another request",
    "res.errorSend": "Oops — sending failed. Check your connection or call us at (450) 492-1416.",
    "res.errorFields": "Please fill in all required fields correctly.",
    "res.todayFull": "Fully booked for today — please pick another date.",
    "res.infoT": "Good to know",
    "res.hours": "Open daily · 4:15 PM – 8:30 PM",
    "res.bigparty": "Party of 11 or more? Call us directly!",
    "info.phone": "Phone", "info.addr": "Address",
    "foot.note": "Menu and prices taken from Uber Eats in October 2026 — subject to change. Call us to confirm.",
    "foot.rights": "© 2026 Chez Lan · Terrebonne, Quebec"
  }
};

let lang = "fr";
const $ = (s) => document.querySelector(s);
const t = (k) => I18N[lang][k] || k;

function fmtTime(hhmm) {
  const [h, m] = hhmm.split(":").map(Number);
  if (lang === "fr") return `${h} h ${String(m).padStart(2, "0")}`;
  const ap = h >= 12 ? "PM" : "AM";
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return `${h12}:${String(m).padStart(2, "0")} ${ap}`;
}
function fmtDateLong(iso) {
  const d = new Date(iso + "T12:00:00");
  return d.toLocaleDateString(lang === "fr" ? "fr-CA" : "en-CA",
    { weekday: "long", day: "numeric", month: "long", year: "numeric" });
}
function guestsLabel(n) {
  return lang === "fr" ? (n === 1 ? "1 personne" : `${n} personnes`) : (n === 1 ? "1 guest" : `${n} guests`);
}
function todayISO() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}
function availableSlots(iso, now = new Date()) {
  if (iso !== todayISO()) return SLOTS.slice();
  const cutoff = now.getTime() + 60 * 60 * 1000; // at least 1h notice
  return SLOTS.filter((s) => {
    const [h, m] = s.split(":").map(Number);
    const dt = new Date(now);
    dt.setHours(h, m, 0, 0);
    return dt.getTime() > cutoff;
  });
}

function renderSlots() {
  const iso = $("#fDate").value || todayISO();
  const slots = availableSlots(iso);
  const sel = $("#fTime");
  sel.innerHTML = slots.length
    ? slots.map((s) => `<option value="${s}">${fmtTime(s)}</option>`).join("")
    : `<option value="" disabled>${t("res.todayFull")}</option>`;
}
function renderGuests() {
  $("#fGuests").innerHTML = Array.from({ length: 10 }, (_, i) => {
    const n = i + 1;
    return `<option value="${n}">${guestsLabel(n)}</option>`;
  }).join("");
}
function applyLang() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const k = el.dataset.i18n;
    if (I18N[lang][k] !== undefined) el.innerHTML = I18N[lang][k];
  });
  document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
    el.placeholder = I18N[lang][el.dataset.i18nPh];
  });
  document.documentElement.lang = lang;
  $("#langBtn").textContent = lang === "fr" ? "EN" : "FR";
  renderSlots(); renderGuests();
}

function showError(msg) {
  const e = $("#formError");
  e.textContent = msg;
  e.style.display = "block";
}
function validEmail(v) { return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v); }

function buildOwnerEmail(d) {
  const dateFR = new Date(d.date + "T12:00:00")
    .toLocaleDateString("fr-CA", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
  const timeFR = d.time.replace(":", " h ");
  const g = d.guests === 1 ? "1 personne" : `${d.guests} personnes`;
  const acceptSubj = "Confirmation de réservation — Chez Lan";
  const acceptBody =
`Bonjour ${d.name},

Bonne nouvelle! Votre réservation pour ${g} le ${dateFR} à ${timeFR} au restaurant Chez Lan est confirmée.

Au plaisir de vous accueillir!

Chez Lan
1421 Chemin Gascon, Terrebonne
${RESTO_PHONE}`;
  const declineSubj = "Votre demande de réservation — Chez Lan";
  const declineBody =
`Bonjour ${d.name},

Malheureusement, nous ne pouvons pas accepter votre demande de réservation pour ${g} le ${dateFR} à ${timeFR}.

Appelez-nous au ${RESTO_PHONE} et il nous fera plaisir de vous trouver un autre moment.

Merci de votre compréhension,
Chez Lan`;
  const q = (s, b) => `mailto:${d.email}?subject=${encodeURIComponent(s)}&body=${encodeURIComponent(b)}`;
  return {
    _subject: `Nouvelle réservation — ${d.name} — ${dateFR} ${timeFR}`,
    Nom: d.name,
    Telephone: d.phone,
    email: d.email, // also sets Reply-To so the owner can just hit "Reply"
    Date: dateFR,
    Heure: timeFR,
    Convives: g,
    Notes: d.notes || "—",
    "Reponse rapide (cliquez un lien)":
`✅ ACCEPTER — ouvre un courriel de confirmation pré-rempli au client :
${q(acceptSubj, acceptBody)}

❌ REFUSER — ouvre un courriel de refus pré-rempli au client :
${q(declineSubj, declineBody)}

💡 Astuce : vous pouvez aussi simplement « Répondre » à ce courriel, la réponse ira directement au client (${d.email}). Client joignable aussi au ${d.phone}.`,
    _template: "table",
    _captcha: "false",
    _honey: ""
  };
}

async function onSubmit(ev) {
  ev.preventDefault();
  $("#formError").style.display = "none";
  const d = {
    date: $("#fDate").value,
    time: $("#fTime").value,
    guests: parseInt($("#fGuests").value, 10),
    name: $("#fName").value.trim(),
    phone: $("#fPhone").value.trim(),
    email: $("#fEmail").value.trim(),
    notes: $("#fNotes").value.trim()
  };
  if (!d.date || !d.time || !d.guests || !d.name || d.phone.replace(/\D/g, "").length < 7 || !validEmail(d.email)) {
    showError(t("res.errorFields"));
    return;
  }
  const btn = $("#submitBtn");
  btn.disabled = true;
  btn.textContent = t("res.sending");
  try {
    const res = await fetch(RES_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify(buildOwnerEmail(d))
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || data.success === "false" || data.success === false) throw new Error("send failed");
    $("#resForm").style.display = "none";
    $("#successSummary").textContent =
      lang === "fr"
        ? `Merci ${d.name}! Votre demande pour le ${fmtDateLong(d.date)} à ${fmtTime(d.time)} (${guestsLabel(d.guests)}) a bien été envoyée.`
        : `Thanks ${d.name}! Your request for ${fmtDateLong(d.date)} at ${fmtTime(d.time)} (${guestsLabel(d.guests)}) was sent.`;
    $("#resSuccess").style.display = "block";
    window.scrollTo({ top: 0, behavior: "smooth" });
  } catch (e) {
    showError(t("res.errorSend"));
  } finally {
    btn.disabled = false;
    btn.textContent = t("res.submit");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".order-link").forEach((a) => (a.href = UBER_URL));
  const dateEl = $("#fDate");
  const today = todayISO();
  const max = new Date();
  max.setDate(max.getDate() + MAX_DAYS_AHEAD);
  dateEl.min = today;
  dateEl.max = `${max.getFullYear()}-${String(max.getMonth() + 1).padStart(2, "0")}-${String(max.getDate()).padStart(2, "0")}`;
  dateEl.value = today;
  dateEl.addEventListener("change", renderSlots);
  $("#langBtn").addEventListener("click", () => { lang = lang === "fr" ? "en" : "fr"; applyLang(); });
  $("#resForm").addEventListener("submit", onSubmit);
  $("#againBtn").addEventListener("click", () => {
    $("#resSuccess").style.display = "none";
    $("#resForm").style.display = "block";
    $("#resForm").reset();
    dateEl.value = todayISO();
    renderSlots(); renderGuests();
  });
  applyLang();
});

// Exported for node QA
if (typeof module !== "undefined") module.exports = { availableSlots, fmtTime, fmtDateLong, guestsLabel, buildOwnerEmail, SLOTS };
