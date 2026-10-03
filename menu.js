/* Chez Lan (Terrebonne) — menu data.
   Source: Uber Eats store page, pulled Oct 3, 2026. Prices in CAD.
   r: [likePct, ratingCount] when shown on Uber Eats. badge: "bogo" | "free40" | "pop" */

const MENU = [
  { id: "entrees", fr: "Les Entrées", en: "Appetizers", items: [
    { n: "Petite Soupe Wonton / Small Wonton Soup", img: "https://tb-static.uber.com/prod/image-proc/processed_images/26c23f5b057343d2add6cd22ff29582d/f47cec1eac1d3b43eccf2318d065819a.jpeg", d: "Délicats wontons farcis dans un bouillon léger.", p: 6.00, r: [97, 68] },
    { n: "Rouleau Printanier (Crevettes ou Poulet) / Spring Roll (Shrimps or Chicken)", img: "https://tb-static.uber.com/prod/image-proc/processed_images/082a4e33f55ed2b4751fd807cb67cfbb/4218ca1d09174218364162cd0b1a8cc1.jpeg", d: "Rouleau délicat aux crevettes ou au poulet.", p: 8.00, r: [98, 53], badge: "pop" },
    { n: "Crevettes Pannées / Breaded Shrimps", img: "https://tb-static.uber.com/prod/image-proc/processed_images/b544eb1e49e1b32c3c07b5d4e51cffa6/4218ca1d09174218364162cd0b1a8cc1.jpeg", d: "Crevettes panées et frites — croustillantes dehors, tendres dedans.", p: 9.00, r: [84, 13] },
    { n: "Rouleaux Impériaux (2 mcx) / Imperial Rolls (2 pcs)", d: "Rouleaux impériaux dorés et croustillants.", p: 6.00, r: [94, 117] },
    { n: "Dumplings Frits (5 mcx) / Fried Dumplings (5 pcs)", d: "Dumplings frits croustillants, servis par 5.", p: 7.00, r: [93, 45] },
    { n: "Wontons Frits (6 mcx) / Fried Wontons (6 pcs)", d: "Wontons frits croustillants aux ingrédients savoureux.", p: 6.00, r: [91, 34], badge: "free40" },
    { n: "Petite Soupe Tonkinoise / Small Tonkinese Soup", d: "Petite soupe tonkinoise parfumée.", p: 6.00, r: [75, 12] },
    { n: "Soupe Maison / Homemade Soup", d: "La soupe maison du chef.", p: 5.00, r: [100, 13] },
    { n: "Calmars Frits / Fried Calamari", d: "Anneaux de calmars frits et croustillants.", p: 7.00, r: [62, 16] },
    { n: "Petite Soupe au Poulet / Small Chicken Soup", d: "Petite soupe au poulet réconfortante.", p: 6.00, r: [100, 6] },
    { n: "Salade au Poulet / Chicken Salad", d: "Poulet tendre mêlé à des verdures fraîches.", p: 19.00, r: [70, 10], badge: "bogo" },
    { n: "Salade Vietnamienne / Vietnamese Salad", d: "Salade fraîche aux saveurs vietnamiennes.", p: 8.00 }
  ]},
  { id: "soupes", fr: "Les Soupes Repas", en: "Meal Soups", items: [
    { n: "Soupe Vietnamienne / Vietnamese Soup", img: "https://tb-static.uber.com/prod/image-proc/processed_images/affcc8a32df83c33cbcaab63fb47ebc1/4218ca1d09174218364162cd0b1a8cc1.jpeg", d: "Vermicelles, légumes et bœuf. Grande soupe.", p: 21.00, r: [71, 21] },
    { n: "Soupe Tonkinoise (L) / Tonkinese Soup (L)", img: "https://tb-static.uber.com/prod/image-proc/processed_images/6467072db83a507c9d55909b0fabbd6b/3093d07d5a810674a6d7adf26679874b.jpeg", d: "Vermicelles et bœuf. Grande soupe.", p: 20.00, r: [76, 25] },
    { n: "Soupe Wonton (L) — 12 mcx / Wonton Soup (L) — 12 pcs", img: "https://tb-static.uber.com/prod/image-proc/processed_images/e77daee5e1b7e0d9edec9d6c47e03109/f47cec1eac1d3b43eccf2318d065819a.jpeg", d: "Grande soupe, 12 wontons.", p: 34.00, r: [81, 16], badge: "bogo" },
    { n: "Soupe Wonton (Nouilles Jaunes) et Poulet Grillé / Wonton Soup (Yellow Noodles) and Grilled Chicken", d: "Grande soupe, nouilles jaunes et poulet grillé.", p: 20.00, r: [95, 22] },
    { n: "Soupe Poulet / Chicken Soup", d: "Vermicelles, légumes et poulet. Grande soupe.", p: 20.00, r: [80, 21] },
    { n: "Soupe Wonton (Nouilles Jaunes) / Wonton Soup (Yellow Noodles)", d: "Grande soupe, nouilles jaunes et wontons.", p: 19.00, r: [100, 3] },
    { n: "Soupe aux Légumes / Vegetable Soup", d: "Vermicelles et légumes. Grande soupe.", p: 18.00 },
    { n: "Soupe aux Crevettes / Shrimp Soup", d: "Vermicelles, légumes et crevettes. Grande soupe.", p: 23.00, r: [66, 3] }
  ]},
  { id: "vermicelles", fr: "Les Vermicelles", en: "Vermicelli", items: [
    { n: "Poulet Sauté à la Citronnelle / Sautéed Chicken with Lemongrass", d: "Servi avec vermicelles et salade.", p: 20.00, r: [71, 7] },
    { n: "Bœuf Sauté à la Citronnelle / Sautéed Beef with Lemongrass", d: "Servi avec vermicelles et salade.", p: 21.00, r: [100, 4] },
    { n: "Rouleau Impérial aux Vermicelles / Vermicelli Imperial Roll", d: "Servi avec vermicelles.", p: 16.00, r: [100, 5] },
    { n: "Crevettes Sautées à la Citronnelle / Sautéed Shrimps with Lemongrass", d: "Servi avec vermicelles et salade.", p: 23.00 }
  ]},
  { id: "combinaisons", fr: "Les Repas Combinaisons", en: "Combination Meals", items: [
    { n: "(C) Poulet Grillé et Bœuf Grillé / Grilled Chicken and Grilled Beef", img: "https://tb-static.uber.com/prod/image-proc/processed_images/eb9d67b593a72573d1b6b914c8fa1a73/f47cec1eac1d3b43eccf2318d065819a.jpeg", d: "Servi avec riz, vermicelles ou nouilles croustillantes, soupe maison et salade.", p: 27.00, r: [93, 79], badge: "pop" },
    { n: "(A) Poulet Sauté aux Légumes / Chicken Sautéed with Vegetables", img: "https://tb-static.uber.com/prod/image-proc/processed_images/1ccd9d33e45bf58c0ce719cd4d019172/4218ca1d09174218364162cd0b1a8cc1.jpeg", d: "Servi avec riz, vermicelles ou nouilles croustillantes et soupe maison.", p: 26.00, r: [96, 59] },
    { n: "(F) Poulet Grillé, Bœuf Grillé et Crevettes Grillées / Grilled Chicken, Grilled Beef and Grilled Shrimp", img: "https://tb-static.uber.com/prod/image-proc/processed_images/51af3129afb59764a572a36e511cd7ac/3093d07d5a810674a6d7adf26679874b.jpeg", d: "Le trio grillé le plus aimé de la maison.", p: 30.00, r: [100, 82], badge: "pop" },
    { n: "(D) Poulet Grillé et Crevettes Grillées / Grilled Chicken and Grilled Shrimps", d: "Servi avec riz, vermicelles ou nouilles croustillantes, soupe maison et salade.", p: 28.00, r: [100, 26] },
    { n: "(H) Bœuf Sauté à la Citronnelle / Sautéed Beef with Lemongrass", d: "Servi avec riz, vermicelles ou nouilles croustillantes, soupe maison et salade.", p: 26.00, r: [100, 5] },
    { n: "(B) Poulet Sauté au Gingembre / Chicken Sautéed with Ginger", d: "Servi avec riz, vermicelles ou nouilles croustillantes, soupe maison et salade.", p: 26.00, r: [100, 6] },
    { n: "(E) Bœuf Grillé et Crevettes Grillées / Grilled Beef and Grilled Shrimp", d: "Servi avec riz, vermicelles ou nouilles croustillantes, soupe maison et salade.", p: 28.00, r: [93, 15] },
    { n: "(G) Crevettes, Poisson et Pétoncles Grillés / Grilled Shrimp, Fish and Scallops", d: "Servi avec riz, vermicelles ou nouilles croustillantes, soupe maison et salade.", p: 35.00, r: [66, 3] }
  ]},
  { id: "brochettes", fr: "Les Brochettes", en: "Skewers", items: [
    { n: "Bœuf Grillé (2) / Grilled Beef (2)", img: "https://tb-static.uber.com/prod/image-proc/processed_images/b7944d20786826ec84b66f1b9015a214/3093d07d5a810674a6d7adf26679874b.jpeg", d: "Servi avec riz ou vermicelles et salade.", p: 22.00, r: [100, 6] },
    { n: "Poulet Grillé (4) / Grilled Chicken (4)", d: "Servi avec riz ou vermicelles et salade.", p: 21.00, r: [100, 5] },
    { n: "Brochettes de Crevettes (2) / Shrimp Skewers (2)", d: "Servi avec riz ou vermicelles et salade.", p: 23.00, r: [100, 5] },
    { n: "Brochettes de Poissons (2) / Fish Skewers (2)", d: "Servi avec riz ou vermicelles et salade.", p: 24.00, r: [100, 3] },
    { n: "Brochettes de Pétoncles (2) / Scallop Skewers (2)", d: "Servi avec riz ou vermicelles et salade.", p: 25.00 }
  ]},
  { id: "wok", fr: "Les Wok Spécialités", en: "Specialty Woks",
    note: "Sauces au choix : aigre-douce, basilic, ananas, gingembre, arachide, cari au lait de coco. Servi avec riz, vermicelles ou nouilles croustillantes.",
    items: [
    { n: "Wok Crevettes / Shrimps Wok", img: "https://tb-static.uber.com/prod/image-proc/processed_images/91cee096119b1ded1364d1beb4bac696/4218ca1d09174218364162cd0b1a8cc1.jpeg", d: "Crevettes sautées au wok, sauce au choix.", p: 26.00, r: [94, 17], badge: "pop" },
    { n: "Wok Poulet / Chicken Wok", d: "Poulet sauté au wok, sauce au choix.", p: 23.00, r: [100, 14] },
    { n: "Wok Bœuf / Beef Wok", d: "Bœuf sauté au wok, sauce au choix.", p: 24.00, r: [100, 7] },
    { n: "Wok Végétarien / Vegetarian Wok", d: "Légumes frais sautés au wok, sauce au choix.", p: 21.00, r: [100, 4] },
    { n: "Wok Pétoncles / Scallops Wok", d: "Pétoncles sautés au wok, sauce au choix.", p: 27.00 },
    { n: "Wok Fruits de Mer / Seafood Wok", d: "Fruits de mer sautés au wok, sauce au choix.", p: 35.00, r: [100, 3] },
    { n: "Wok Poissons / Fish Wok", d: "Poisson sauté au wok, sauce au choix.", p: 27.00, r: [100, 4] }
  ]},
  { id: "specialites", fr: "Les Autres Spécialités", en: "Other Specialties", items: [
    { n: "Poulet Général Tao / General Tao Chicken", img: "https://tb-static.uber.com/prod/image-proc/processed_images/deb434bd9ea5793286f2a8aad0985adf/4218ca1d09174218364162cd0b1a8cc1.jpeg", d: "Le grand classique, servi avec riz, vermicelles ou nouilles croustillantes.", p: 22.00, r: [86, 110], badge: "pop" },
    { n: "Pad Thai", img: "https://tb-static.uber.com/prod/image-proc/processed_images/8d47fdff4cdcc8fc78f622dbe5121246/4218ca1d09174218364162cd0b1a8cc1.jpeg", d: "Nouilles de riz sautées aux légumes et crevettes.", p: 22.00, r: [94, 36], badge: "pop" },
    { n: "Poulet Sauté aux Légumes / Sautéed Chicken with Vegetables", img: "https://tb-static.uber.com/prod/image-proc/processed_images/efa38a3d765477a702483212346f65e7/3093d07d5a810674a6d7adf26679874b.jpeg", d: "Servi avec riz, vermicelles ou nouilles croustillantes.", p: 22.00, r: [100, 14] },
    { n: "Crevettes Sautées aux Légumes / Sautéed Shrimps with Vegetables", img: "https://tb-static.uber.com/prod/image-proc/processed_images/400f0facd81cb80d300ee1ad456deb7f/3093d07d5a810674a6d7adf26679874b.jpeg", d: "Servi avec riz, vermicelles ou nouilles croustillantes.", p: 26.00 },
    { n: "Bœuf Sauté aux Légumes / Sautéed Beef with Vegetables", d: "Servi avec riz, vermicelles ou nouilles croustillantes.", p: 23.00, r: [76, 13] },
    { n: "Plat Végétarien Sauté / Vegetarian Sautéed Dish", d: "Servi avec riz, vermicelles ou nouilles croustillantes.", p: 20.00 },
    { n: "Crevettes et Poulet Sautés aux Légumes / Sautéed Shrimps and Chicken with Vegetables", d: "Servi avec riz, vermicelles ou nouilles croustillantes.", p: 27.00, r: [100, 4] },
    { n: "Crevettes, Poulet et Bœuf Sautés aux Légumes / Chicken, Beef and Shrimp Sautéed with Vegetables", d: "Servi avec riz, vermicelles ou nouilles croustillantes.", p: 29.00 },
    { n: "Fruits de Mer Sautés aux Légumes / Sautéed Seafood with Vegetables", d: "Servi avec riz, vermicelles ou nouilles croustillantes.", p: 35.00 },
    { n: "Pétoncles Sautés aux Légumes / Sautéed Scallops with Vegetables", d: "Servi avec riz, vermicelles ou nouilles croustillantes.", p: 27.00 },
    { n: "Poissons Sautés aux Légumes / Sautéed Fish with Vegetables", d: "Servi avec riz, vermicelles ou nouilles croustillantes.", p: 26.00 }
  ]},
  { id: "poke", fr: "Poké Bols", en: "Poke Bowls", items: [
    { n: "Poké Bol Vietnamien / Vietnamese Poke Bowl", img: "https://tb-static.uber.com/prod/image-proc/processed_images/1d04f1eb91be2b0fd8b3323fa0aeee24/bc9c318a9c96996e2d990faf2b0c65f6.jpeg", d: "Poulet grillé, vermicelles, légumes frais et rouleau impérial croustillant.", p: 18.00, r: [100, 8], badge: "pop" }
  ]},
  { id: "enfants", fr: "Menu Enfants (12 ans et moins)", en: "Kids Menu (12 and under)", items: [
    { n: "Menu Enfant — Poulet Grillé ou Bœuf Grillé / Kids — Grilled Chicken or Grilled Beef", img: "https://tb-static.uber.com/prod/image-proc/processed_images/f8f469629b9516180bb70b125aaa13e4/3093d07d5a810674a6d7adf26679874b.jpeg", d: "Servi avec riz ou vermicelles, rouleau impérial et salade.", p: 18.00, r: [96, 26] }
  ]},
  { id: "boissons", fr: "Canettes", en: "Canned Drinks", items: [
    { n: "Coca-Cola", d: "", p: 3.00, r: [100, 7] },
    { n: "Coke Diète / Diet Coke", d: "", p: 3.00 },
    { n: "7UP", d: "", p: 3.00, r: [100, 3] }
  ]},
  { id: "desserts", fr: "Desserts", en: "Desserts", items: [
    { n: "Bananes Frites / Fried Banana", d: "Beignets de bananes croustillants, une douceur sucrée.", p: 6.00, r: [100, 10] },
    { n: "Ananas Frits / Fried Pineapple", d: "Rondelles d'ananas croustillantes, une douceur sucrée.", p: 6.00, r: [88, 9] }
  ]}
];

const UBER_IMG = "https://tb-static.uber.com/prod/image-proc/processed_images/";
const FEATURED = [
  { n: "(F) Poulet Grillé, Bœuf Grillé et Crevettes Grillées", p: 30.00, r: [100, 82], img: UBER_IMG + "51af3129afb59764a572a36e511cd7ac/3093d07d5a810674a6d7adf26679874b.jpeg", tag: "#1" },
  { n: "Poulet Général Tao", p: 22.00, r: [86, 110], img: UBER_IMG + "deb434bd9ea5793286f2a8aad0985adf/4218ca1d09174218364162cd0b1a8cc1.jpeg", tag: "#2" },
  { n: "(C) Poulet Grillé et Bœuf Grillé", p: 27.00, r: [93, 79], img: UBER_IMG + "eb9d67b593a72573d1b6b914c8fa1a73/f47cec1eac1d3b43eccf2318d065819a.jpeg", tag: "#3" },
  { n: "Rouleau Printanier (Crevettes ou Poulet)", p: 8.00, r: [98, 53], img: UBER_IMG + "082a4e33f55ed2b4751fd807cb67cfbb/4218ca1d09174218364162cd0b1a8cc1.jpeg", tag: "★" },
  { n: "Pad Thai", p: 22.00, r: [94, 36], img: UBER_IMG + "8d47fdff4cdcc8fc78f622dbe5121246/4218ca1d09174218364162cd0b1a8cc1.jpeg", tag: "★" },
  { n: "Soupe Tonkinoise (L)", p: 20.00, r: [76, 25], img: UBER_IMG + "6467072db83a507c9d55909b0fabbd6b/3093d07d5a810674a6d7adf26679874b.jpeg", tag: "★" }
];
