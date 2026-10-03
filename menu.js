/* Chez Lan (Terrebonne) — menu data.
   Source: Uber Eats store page, pulled Oct 3, 2026. Prices in CAD.
   r: [likePct, ratingCount] when shown on Uber Eats. badge: "bogo" | "free40" | "pop" */

const MENU = [
  { id: "entrees", fr: "Les Entrées", en: "Appetizers", items: [
    { n: "Petite Soupe Wonton / Small Wonton Soup", d: "Délicats wontons farcis dans un bouillon léger.", p: 6.00, r: [97, 68] },
    { n: "Rouleau Printanier (Crevettes ou Poulet) / Spring Roll (Shrimps or Chicken)", d: "Rouleau délicat aux crevettes ou au poulet.", p: 8.00, r: [98, 53], badge: "pop" },
    { n: "Crevettes Pannées / Breaded Shrimps", d: "Crevettes panées et frites — croustillantes dehors, tendres dedans.", p: 9.00, r: [84, 13] },
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
    { n: "Soupe Vietnamienne / Vietnamese Soup", d: "Vermicelles, légumes et bœuf. Grande soupe.", p: 21.00, r: [71, 21] },
    { n: "Soupe Tonkinoise (L) / Tonkinese Soup (L)", d: "Vermicelles et bœuf. Grande soupe.", p: 20.00, r: [76, 25] },
    { n: "Soupe Wonton (L) — 12 mcx / Wonton Soup (L) — 12 pcs", d: "Grande soupe, 12 wontons.", p: 34.00, r: [81, 16], badge: "bogo" },
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
    { n: "(C) Poulet Grillé et Bœuf Grillé / Grilled Chicken and Grilled Beef", d: "Servi avec riz, vermicelles ou nouilles croustillantes, soupe maison et salade.", p: 27.00, r: [93, 79], badge: "pop" },
    { n: "(A) Poulet Sauté aux Légumes / Chicken Sautéed with Vegetables", d: "Servi avec riz, vermicelles ou nouilles croustillantes et soupe maison.", p: 26.00, r: [96, 59] },
    { n: "(F) Poulet Grillé, Bœuf Grillé et Crevettes Grillées / Grilled Chicken, Grilled Beef and Grilled Shrimp", d: "Le trio grillé le plus aimé de la maison.", p: 30.00, r: [100, 82], badge: "pop" },
    { n: "(D) Poulet Grillé et Crevettes Grillées / Grilled Chicken and Grilled Shrimps", d: "Servi avec riz, vermicelles ou nouilles croustillantes, soupe maison et salade.", p: 28.00, r: [100, 26] },
    { n: "(H) Bœuf Sauté à la Citronnelle / Sautéed Beef with Lemongrass", d: "Servi avec riz, vermicelles ou nouilles croustillantes, soupe maison et salade.", p: 26.00, r: [100, 5] },
    { n: "(B) Poulet Sauté au Gingembre / Chicken Sautéed with Ginger", d: "Servi avec riz, vermicelles ou nouilles croustillantes, soupe maison et salade.", p: 26.00, r: [100, 6] },
    { n: "(E) Bœuf Grillé et Crevettes Grillées / Grilled Beef and Grilled Shrimp", d: "Servi avec riz, vermicelles ou nouilles croustillantes, soupe maison et salade.", p: 28.00, r: [93, 15] },
    { n: "(G) Crevettes, Poisson et Pétoncles Grillés / Grilled Shrimp, Fish and Scallops", d: "Servi avec riz, vermicelles ou nouilles croustillantes, soupe maison et salade.", p: 35.00, r: [66, 3] }
  ]},
  { id: "brochettes", fr: "Les Brochettes", en: "Skewers", items: [
    { n: "Bœuf Grillé (2) / Grilled Beef (2)", d: "Servi avec riz ou vermicelles et salade.", p: 22.00, r: [100, 6] },
    { n: "Poulet Grillé (4) / Grilled Chicken (4)", d: "Servi avec riz ou vermicelles et salade.", p: 21.00, r: [100, 5] },
    { n: "Brochettes de Crevettes (2) / Shrimp Skewers (2)", d: "Servi avec riz ou vermicelles et salade.", p: 23.00, r: [100, 5] },
    { n: "Brochettes de Poissons (2) / Fish Skewers (2)", d: "Servi avec riz ou vermicelles et salade.", p: 24.00, r: [100, 3] },
    { n: "Brochettes de Pétoncles (2) / Scallop Skewers (2)", d: "Servi avec riz ou vermicelles et salade.", p: 25.00 }
  ]},
  { id: "wok", fr: "Les Wok Spécialités", en: "Specialty Woks",
    note: "Sauces au choix : aigre-douce, basilic, ananas, gingembre, arachide, cari au lait de coco. Servi avec riz, vermicelles ou nouilles croustillantes.",
    items: [
    { n: "Wok Crevettes / Shrimps Wok", d: "Crevettes sautées au wok, sauce au choix.", p: 26.00, r: [94, 17], badge: "pop" },
    { n: "Wok Poulet / Chicken Wok", d: "Poulet sauté au wok, sauce au choix.", p: 23.00, r: [100, 14] },
    { n: "Wok Bœuf / Beef Wok", d: "Bœuf sauté au wok, sauce au choix.", p: 24.00, r: [100, 7] },
    { n: "Wok Végétarien / Vegetarian Wok", d: "Légumes frais sautés au wok, sauce au choix.", p: 21.00, r: [100, 4] },
    { n: "Wok Pétoncles / Scallops Wok", d: "Pétoncles sautés au wok, sauce au choix.", p: 27.00 },
    { n: "Wok Fruits de Mer / Seafood Wok", d: "Fruits de mer sautés au wok, sauce au choix.", p: 35.00, r: [100, 3] },
    { n: "Wok Poissons / Fish Wok", d: "Poisson sauté au wok, sauce au choix.", p: 27.00, r: [100, 4] }
  ]},
  { id: "specialites", fr: "Les Autres Spécialités", en: "Other Specialties", items: [
    { n: "Poulet Général Tao / General Tao Chicken", d: "Le grand classique, servi avec riz, vermicelles ou nouilles croustillantes.", p: 22.00, r: [86, 110], badge: "pop" },
    { n: "Pad Thai", d: "Nouilles de riz sautées aux légumes et crevettes.", p: 22.00, r: [94, 36], badge: "pop" },
    { n: "Poulet Sauté aux Légumes / Sautéed Chicken with Vegetables", d: "Servi avec riz, vermicelles ou nouilles croustillantes.", p: 22.00, r: [100, 14] },
    { n: "Crevettes Sautées aux Légumes / Sautéed Shrimps with Vegetables", d: "Servi avec riz, vermicelles ou nouilles croustillantes.", p: 26.00 },
    { n: "Bœuf Sauté aux Légumes / Sautéed Beef with Vegetables", d: "Servi avec riz, vermicelles ou nouilles croustillantes.", p: 23.00, r: [76, 13] },
    { n: "Plat Végétarien Sauté / Vegetarian Sautéed Dish", d: "Servi avec riz, vermicelles ou nouilles croustillantes.", p: 20.00 },
    { n: "Crevettes et Poulet Sautés aux Légumes / Sautéed Shrimps and Chicken with Vegetables", d: "Servi avec riz, vermicelles ou nouilles croustillantes.", p: 27.00, r: [100, 4] },
    { n: "Crevettes, Poulet et Bœuf Sautés aux Légumes / Chicken, Beef and Shrimp Sautéed with Vegetables", d: "Servi avec riz, vermicelles ou nouilles croustillantes.", p: 29.00 },
    { n: "Fruits de Mer Sautés aux Légumes / Sautéed Seafood with Vegetables", d: "Servi avec riz, vermicelles ou nouilles croustillantes.", p: 35.00 },
    { n: "Pétoncles Sautés aux Légumes / Sautéed Scallops with Vegetables", d: "Servi avec riz, vermicelles ou nouilles croustillantes.", p: 27.00 },
    { n: "Poissons Sautés aux Légumes / Sautéed Fish with Vegetables", d: "Servi avec riz, vermicelles ou nouilles croustillantes.", p: 26.00 }
  ]},
  { id: "poke", fr: "Poké Bols", en: "Poke Bowls", items: [
    { n: "Poké Bol Vietnamien / Vietnamese Poke Bowl", d: "Poulet grillé, vermicelles, légumes frais et rouleau impérial croustillant.", p: 18.00, r: [100, 8], badge: "pop" }
  ]},
  { id: "enfants", fr: "Menu Enfants (12 ans et moins)", en: "Kids Menu (12 and under)", items: [
    { n: "Menu Enfant — Poulet Grillé ou Bœuf Grillé / Kids — Grilled Chicken or Grilled Beef", d: "Servi avec riz ou vermicelles, rouleau impérial et salade.", p: 18.00, r: [96, 26] }
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

const FEATURED = [
  { n: "(F) Poulet Grillé, Bœuf Grillé et Crevettes Grillées", p: 30.00, r: [100, 82], img: "images/brochettes.jpg", tag: "#1" },
  { n: "Poulet Général Tao", p: 22.00, r: [86, 110], img: "images/hero.jpg", tag: "#2" },
  { n: "(C) Poulet Grillé et Bœuf Grillé", p: 27.00, r: [93, 79], img: "images/brochettes.jpg", tag: "#3" },
  { n: "Rouleau Printanier (Crevettes ou Poulet)", p: 8.00, r: [98, 53], img: "images/rouleaux.jpg", tag: "★" },
  { n: "Pad Thai", p: 22.00, r: [94, 36], img: "images/hero.jpg", tag: "★" },
  { n: "Soupe Tonkinoise (L)", p: 20.00, r: [76, 25], img: "images/soupe.jpg", tag: "★" }
];
