/* Chez Lan — shared bilingual reply templates.
   Used by the reservation form (owner notification email) and repondre.html
   (the owner's accept/refuse page). Loaded before reservation.js / repondre.js. */
const RESTO_PHONE = "(450) 492-1416";
const RESTO_ADDR = "1421 Chemin Gascon, Terrebonne";
const RESTO_NAME = "Chez Lan";

function tplDateFR(iso) {
  return new Date(iso + "T12:00:00").toLocaleDateString("fr-CA",
    { weekday: "long", day: "numeric", month: "long", year: "numeric" });
}
function tplDateEN(iso) {
  return new Date(iso + "T12:00:00").toLocaleDateString("en-CA",
    { weekday: "long", day: "numeric", month: "long", year: "numeric" });
}
function tplTimeFR(hhmm) { return hhmm.replace(":", " h "); }
function tplTimeEN(hhmm) {
  const [h, m] = hhmm.split(":").map(Number);
  const ap = h >= 12 ? "PM" : "AM";
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return `${h12}:${String(m).padStart(2, "0")} ${ap}`;
}
function tplGuestsFR(n) { return n === 1 ? "1 personne" : `${n} personnes`; }
function tplGuestsEN(n) { return n === 1 ? "1 guest" : `${n} guests`; }

function acceptSubject() { return "Confirmation de réservation / Reservation confirmed — Chez Lan"; }
function declineSubject() { return "Votre demande de réservation / Your reservation request — Chez Lan"; }

/* d: { name, date (YYYY-MM-DD), time (HH:MM), guests } */
function buildAcceptBody(d) {
  return (
`Bonjour ${d.name},

Bonne nouvelle! Votre réservation pour ${tplGuestsFR(d.guests)} le ${tplDateFR(d.date)} à ${tplTimeFR(d.time)} au restaurant ${RESTO_NAME} est confirmée.

Au plaisir de vous accueillir!

${RESTO_NAME}
${RESTO_ADDR}
${RESTO_PHONE}

---
Hello ${d.name},

Good news! Your reservation for ${tplGuestsEN(d.guests)} on ${tplDateEN(d.date)} at ${tplTimeEN(d.time)} at ${RESTO_NAME} restaurant is confirmed.

We look forward to welcoming you!

${RESTO_NAME}
${RESTO_ADDR}
${RESTO_PHONE}`);
}

function buildDeclineBody(d) {
  return (
`Bonjour ${d.name},

Malheureusement, nous ne pouvons pas accepter votre demande de réservation pour ${tplGuestsFR(d.guests)} le ${tplDateFR(d.date)} à ${tplTimeFR(d.time)}.

Appelez-nous au ${RESTO_PHONE} et il nous fera plaisir de vous trouver un autre moment.

Merci de votre compréhension,
${RESTO_NAME}

---
Hello ${d.name},

Unfortunately, we cannot accept your reservation request for ${tplGuestsEN(d.guests)} on ${tplDateEN(d.date)} at ${tplTimeEN(d.time)}.

Please call us at ${RESTO_PHONE} and we will be happy to find another time for you.

Thank you for your understanding,
${RESTO_NAME}`);
}

if (typeof module !== "undefined") {
  module.exports = {
    RESTO_PHONE, RESTO_ADDR, RESTO_NAME,
    tplDateFR, tplDateEN, tplTimeFR, tplTimeEN, tplGuestsFR, tplGuestsEN,
    acceptSubject, declineSubject, buildAcceptBody, buildDeclineBody
  };
}
