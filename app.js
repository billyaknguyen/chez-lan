/* Chez Lan site — rendering + FR/EN toggle.
   Photos come only from Uber Eats (real dish photos). No AI images.
   HERO_IMG: set to a real Uber Eats photo URL to show it in the hero; empty = no photo. */
const UBER_URL = "https://www.ubereats.com/ca/store/chez-lan-terrebonne/VFCgO5uMVUG-vYplW3tc1w";
const HERO_IMG = "https://tb-static.uber.com/prod/image-proc/processed_images/1910c130eae8edf2dc6b7b0a0e17ae5f/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg";

const I18N = {
  fr: {
    "nav.home": "Accueil", "nav.menu": "Menu", "nav.info": "Nous trouver", "nav.book": "Réserver", "nav.order": "Commander",
    "hero.kicker": "Cuisine vietnamienne · Terrebonne",
    "hero.sub": "Grillades parfumées, soupes fumantes et rouleaux croustillants — une authentique cuisine vietnamienne au cœur de Terrebonne.",
    "hero.cta1": "Voir le menu", "hero.cta2": "Commander en ligne",
    "hero.rating": "4,7 ★ · plus de 800 avis sur Uber Eats",
    "hero.photocap": "Photo : Uber Eats",
    "offers.t": "Offres en cours",
    "offer.bogo": "2 pour 1",
    "offer.free": "Gratuit 40 $+",
    "fav.title": "Nos <em>favoris</em>", "fav.sub": "Les plats les plus aimés de nos clients",
    "menu.title": "Le <em>menu</em>", "menu.sub": "Tout est préparé frais. Prix en dollars canadiens, taxes en sus.",
    "menu.search": "Rechercher un plat…", "menu.noresults": "Aucun plat trouvé. Essayez un autre mot.",
    "badge.bogo": "2 pour 1", "badge.free40": "Gratuit · 40 $+", "badge.pop": "Populaire",
    "info.title": "Nous <em>trouver</em>", "info.sub": "À deux pas du chemin Gascon — passez nous voir ou commandez pour emporter.",
    "info.addr": "Adresse", "info.phone": "Téléphone", "info.hours": "Heures d'ouverture",
    "info.everyday": "Tous les jours", "info.hourval": "16 h 00 – 21 h 00",
    "info.call": "Appeler", "info.directions": "Itinéraire", "info.order": "Commander pour emporter",
    "foot.note": "Menu et prix tirés d'Uber Eats en octobre 2026 — sujets à changement. Appelez-nous pour confirmer.",
    "foot.rights": "© 2026 Chez Lan · Terrebonne, Québec"
  },
  en: {
    "nav.home": "Home", "nav.menu": "Menu", "nav.info": "Find us", "nav.book": "Book a table", "nav.order": "Order",
    "hero.kicker": "Vietnamese cuisine · Terrebonne",
    "hero.sub": "Fragrant grilled dishes, steaming soups and crispy rolls — authentic Vietnamese cuisine in the heart of Terrebonne.",
    "hero.cta1": "See the menu", "hero.cta2": "Order online",
    "hero.rating": "4.7 ★ · 800+ reviews on Uber Eats",
    "hero.photocap": "Photo: Uber Eats",
    "offers.t": "Current offers",
    "offer.bogo": "Buy 1 get 1",
    "offer.free": "Free on $40+",
    "fav.title": "Our <em>favourites</em>", "fav.sub": "Our customers' most-loved dishes",
    "menu.title": "The <em>menu</em>", "menu.sub": "Everything is made fresh. Prices in Canadian dollars, taxes extra.",
    "menu.search": "Search a dish…", "menu.noresults": "No dish found. Try another word.",
    "badge.bogo": "Buy 1 get 1", "badge.free40": "Free · $40+", "badge.pop": "Popular",
    "info.title": "Find <em>us</em>", "info.sub": "Just off Chemin Gascon — stop by or order takeout.",
    "info.addr": "Address", "info.phone": "Phone", "info.hours": "Opening hours",
    "info.everyday": "Every day", "info.hourval": "4:00 PM – 9:00 PM",
    "info.call": "Call us", "info.directions": "Directions", "info.order": "Order takeout",
    "foot.note": "Menu and prices taken from Uber Eats in October 2026 — subject to change. Call us to confirm.",
    "foot.rights": "© 2026 Chez Lan · Terrebonne, Quebec"
  }
};

let lang = "fr";

const $ = (s) => document.querySelector(s);
const priceFmt = (p) =>
  lang === "fr"
    ? p.toFixed(2).replace(".", ",").replace(",00", ",00") + " $"
    : "$" + p.toFixed(2);

function badgeHTML(b) {
  if (!b) return "";
  const labels = { bogo: I18N[lang]["badge.bogo"], free40: I18N[lang]["badge.free40"], pop: I18N[lang]["badge.pop"] };
  return `<span class="badge ${b}">${labels[b]}</span>`;
}
function likeHTML(r) {
  if (!r) return "";
  return `<span class="like"><b>♥</b> ${r[0]} % (${r[1]})</span>`;
}

function renderFeatured() {
  $("#favGrid").innerHTML = FEATURED.map(f => `
    <div class="fav-card">
      ${f.img ? `<div class="fav-img" style="background-image:url('${f.img}')"><span class="fav-rank">${f.tag}</span></div>` : ""}
      <div class="fav-body">
        ${f.img ? "" : `<span class="fav-rank" style="position:static;display:inline-block;margin-bottom:10px">${f.tag}</span>`}
        <h3>${f.n}</h3>
        <div class="fav-meta"><span class="price">${priceFmt(f.p)}</span>${likeHTML(f.r)}</div>
      </div>
    </div>`).join("");
}

let activeCat = "all";
let query = "";

function renderTabs() {
  const tabs = [{ id: "all", fr: "Tout", en: "All" }, ...MENU];
  $("#tabs").innerHTML = tabs.map(t =>
    `<button class="tab${t.id === activeCat ? " active" : ""}" data-cat="${t.id}">${t[lang]}</button>`
  ).join("");
  document.querySelectorAll(".tab").forEach(b =>
    b.addEventListener("click", () => { activeCat = b.dataset.cat; renderTabs(); renderMenu(); })
  );
}

function dishMatches(item) {
  if (!query) return true;
  return (item.n + " " + (item.d || "")).toLowerCase().includes(query);
}

function renderMenu() {
  const cats = MENU.filter(c => activeCat === "all" || c.id === activeCat);
  let html = "";
  cats.forEach(c => {
    const items = c.items.filter(dishMatches);
    if (!items.length) return;
    html += `<div class="cat-block">
      <h3 class="cat-title">${c[lang]}</h3>
      ${c.note ? `<p class="cat-note">${c.note}</p>` : ""}
      <div class="dish-grid">` +
      items.map(i => `
        <div class="dish">
          ${i.img ? `<img class="dish-thumb" src="${i.img}" alt="" loading="lazy" referrerpolicy="no-referrer">` : ""}
          <div class="dish-main">
          <div class="dish-top"><h3>${i.n}</h3><span class="price">${priceFmt(i.p)}</span></div>
          ${i.d ? `<p>${i.d}</p>` : ""}
          <div class="dish-foot">${badgeHTML(i.badge)}${likeHTML(i.r)}</div>
          </div>
        </div>`).join("") +
      `</div></div>`;
  });
  $("#menuList").innerHTML = html || `<p class="no-results">${I18N[lang]["menu.noresults"]}</p>`;
}

function applyLang() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const k = el.dataset.i18n;
    if (I18N[lang][k] !== undefined) el.innerHTML = I18N[lang][k];
  });
  document.querySelectorAll("[data-i18n-ph]").forEach(el => {
    el.placeholder = I18N[lang][el.dataset.i18nPh];
  });
  document.documentElement.lang = lang;
  $("#langBtn").textContent = lang === "fr" ? "EN" : "FR";
  renderFeatured(); renderTabs(); renderMenu();
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".order-link").forEach(a => a.href = UBER_URL);
  const navToggle = $("#navToggle");
  const navLinks = document.querySelector(".nav-links");
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", (e) => { e.stopPropagation(); navLinks.classList.toggle("open"); });
    navLinks.querySelectorAll("a").forEach(a => a.addEventListener("click", () => navLinks.classList.remove("open")));
    document.addEventListener("click", (e) => {
      if (!navLinks.contains(e.target)) navLinks.classList.remove("open");
    });
  }
  if (HERO_IMG) {
    $("#heroImg").src = HERO_IMG;
    $("#heroPhoto").style.display = "flex";
    $("#heroGrid").classList.remove("no-photo");
  }
  $("#langBtn").addEventListener("click", () => { lang = lang === "fr" ? "en" : "fr"; applyLang(); });
  $("#search").addEventListener("input", e => { query = e.target.value.trim().toLowerCase(); renderMenu(); });
  applyLang();
});
