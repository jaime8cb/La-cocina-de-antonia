/* =========================
   MENÚ MÓVIL
========================= */

const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("open");
});


document.querySelectorAll("#nav a").forEach(link => {

  link.addEventListener("click", () => {
    nav.classList.remove("open");
  });

});




/* =========================
   TRADUCCIONES
========================= */

const translations = {

  "nav-home": {
    es: "Inicio",
    en: "Home",
    fr: "Accueil"
  },

  "nav-rice": {
    es: "Arroces",
    en: "Rice",
    fr: "Riz"
  },

  "nav-takeaway": {
    es: "Para llevar",
    en: "Takeaway",
    fr: "À emporter"
  },

  "nav-desserts": {
    es: "Dulces",
    en: "Desserts",
    fr: "Desserts"
  },

  "nav-contact": {
    es: "Contacto",
    en: "Contact",
    fr: "Contact"
  },


  "takeaway-food": {
    es: "Comida para llevar",
    en: "Takeaway food",
    fr: "Plats à emporter"
  },

  "homemade": {
    es: "COCINA CASERA",
    en: "HOMEMADE FOOD",
    fr: "CUISINE MAISON"
  },

  "made-with": {
    es: "Hecha con",
    en: "Made with",
    fr: "Préparée avec"
  },

  "love": {
    es: "cariño.",
    en: "love.",
    fr: "amour."
  },

  "hero-description": {
    es: "El sabor de la cocina de siempre, preparado para que solo tengas que sentarte y disfrutar.",
    en: "The taste of traditional homemade cooking, prepared so you only have to sit back and enjoy.",
    fr: "Le goût de la cuisine traditionnelle, préparée pour que vous n’ayez plus qu’à vous asseoir et profiter."
  },

  "view-menu": {
    es: "Ver la carta",
    en: "View the menu",
    fr: "Voir la carte"
  },


  "takeaway": {
    es: "COMIDA PARA LLEVAR",
    en: "TAKEAWAY FOOD",
    fr: "PLATS À EMPORTER"
  },

  "like-home": {
    es: "Como en casa,",
    en: "Just like home,",
    fr: "Comme à la maison,"
  },

  "without-cooking": {
    es: "pero sin cocinar.",
    en: "without the cooking.",
    fr: "mais sans cuisiner."
  },

  "intro-description": {
    es: "Platos caseros preparados con mimo, recetas tradicionales y ese sabor que nos recuerda a la cocina de siempre.",
    en: "Homemade dishes prepared with care, traditional recipes and that familiar taste of home cooking.",
    fr: "Des plats faits maison préparés avec soin, des recettes traditionnelles et ce goût qui rappelle la cuisine d'autrefois."
  },


  "by-order": {
    es: "POR ENCARGO",
    en: "MADE TO ORDER",
    fr: "SUR COMMANDE"
  },

  "rice-title": {
    es: "Arroces",
    en: "Rice dishes",
    fr: "Riz"
  },

  "minimum": {
    es: "Mínimo 4 raciones",
    en: "Minimum 4 portions",
    fr: "Minimum 4 portions"
  },

  "rice-vegetables": {
    es: "Verduras",
    en: "Vegetable",
    fr: "Légumes"
  },

  "rice-chicken": {
    es: "Verduras con pollo",
    en: "Vegetables with chicken",
    fr: "Légumes au poulet"
  },

  "rice-mixed": {
    es: "Mixta",
    en: "Mixed paella",
    fr: "Paella mixte"
  },

  "rice-seafood": {
    es: "Paella de marisco",
    en: "Seafood paella",
    fr: "Paella aux fruits de mer"
  },

  "black-rice": {
    es: "Arroz negro con sepia",
    en: "Black rice with cuttlefish",
    fr: "Riz noir à la seiche"
  },

  "rice-langoustine": {
    es: "Paella de marisco con cigala",
    en: "Seafood paella with langoustine",
    fr: "Paella aux fruits de mer et langoustine"
  },

  "rice-lobster": {
    es: "Arroz con bogavante",
    en: "Rice with lobster",
    fr: "Riz au homard"
  },

  "minimum-two": {
    es: "(mín. 2 rac.)",
    en: "(min. 2 portions)",
    fr: "(min. 2 portions)"
  },


  "takeaway-label": {
    es: "PARA LLEVAR",
    en: "TAKEAWAY",
    fr: "À EMPORTER"
  },

  "homemade-dishes": {
    es: "Platos caseros",
    en: "Homemade dishes",
    fr: "Plats faits maison"
  },

  "takeaway-description": {
    es: "Preparados para disfrutar donde quieras.",
    en: "Prepared for you to enjoy wherever you want.",
    fr: "Préparés pour être dégustés où vous voulez."
  },


  "roast-chicken": {
    es: "Pollo asado",
    en: "Roast chicken",
    fr: "Poulet rôti"
  },

  "tortilla": {
    es: "Tortilla de patatas",
    en: "Spanish omelette",
    fr: "Tortilla espagnole"
  },

  "squid": {
    es: "Chipirones en su tinta",
    en: "Baby squid in ink sauce",
    fr: "Petits calamars à l'encre"
  },

  "empanada": {
    es: "1/4 Empanada casera",
    en: "1/4 Homemade empanada",
    fr: "1/4 Empanada maison"
  },

  "empanada-flavours": {
    es: "(pollo, carne, bonito, morcilla...)",
    en: "(chicken, beef, tuna, blood sausage...)",
    fr: "(poulet, bœuf, thon, boudin...)"
  },

  "russian-salad": {
    es: "Ensaladilla rusa",
    en: "Russian salad",
    fr: "Salade russe"
  },

  "pepper-salad": {
    es: "Ensaladilla de pimientos asados",
    en: "Roasted pepper salad",
    fr: "Salade de poivrons grillés"
  },

  "house-salad": {
    es: "Ensaladilla de la casa",
    en: "House salad",
    fr: "Salade maison"
  },

  "meatballs": {
    es: "Albóndigas",
    en: "Meatballs",
    fr: "Boulettes de viande"
  },

  "homemade-fries": {
    es: "Patatas fritas caseras",
    en: "Homemade fries",
    fr: "Frites maison"
  },

  "fries-note": {
    es: "(por encargo, realizadas con las mejores patatas y en el momento)",
    en: "(made to order with the best potatoes, freshly prepared)",
    fr: "(sur commande, préparées avec les meilleures pommes de terre)"
  },

  "small": {
    es: "Pequeña",
    en: "Small",
    fr: "Petite"
  },

  "large": {
    es: "Grande",
    en: "Large",
    fr: "Grande"
  },

  "croquettes": {
    es: "Croquetas",
    en: "Croquettes",
    fr: "Croquettes"
  },

  "special-croquettes": {
    es: "Salmón con espinacas, pollo, abuela, queso",
    en: "Salmon with spinach, chicken, grandmother's style, cheese",
    fr: "Saumon aux épinards, poulet, recette de grand-mère, fromage"
  },

  "six-units": {
    es: "6 unidades",
    en: "6 units",
    fr: "6 unités"
  },

  "twelve-units": {
    es: "12 unidades",
    en: "12 units",
    fr: "12 unités"
  },

  "ham-croquettes": {
    es: "Jamón y especiales",
    en: "Ham and special croquettes",
    fr: "Jambon et croquettes spéciales"
  },


  "lasagna": {
    es: "Lasaña de carne o verdura",
    en: "Meat or vegetable lasagna",
    fr: "Lasagnes à la viande ou aux légumes"
  },

  "white-rice": {
    es: "Arroz blanco",
    en: "White rice",
    fr: "Riz blanc"
  },

  "aubergine": {
    es: "Berenjenas fritas crujientes con miel",
    en: "Crispy fried aubergine with honey",
    fr: "Aubergines frites croustillantes au miel"
  },

  "by-order-small": {
    es: "(por encargo)",
    en: "(made to order)",
    fr: "(sur commande)"
  },

  "anchovies": {
    es: "Boquerones en vinagre",
    en: "Anchovies in vinegar",
    fr: "Anchois au vinaigre"
  },

  "fried-peppers": {
    es: "Pimientos fritos",
    en: "Fried peppers",
    fr: "Poivrons frits"
  },

  "gazpacho": {
    es: "Gazpacho y salmorejo",
    en: "Gazpacho and salmorejo",
    fr: "Gaspacho et salmorejo"
  },

  "season": {
    es: "(en temporada)",
    en: "(seasonal)",
    fr: "(de saison)"
  },

  "portion-paella": {
    es: "Paella mixta por raciones",
    en: "Mixed paella by portion",
    fr: "Paella mixte à la portion"
  },

  "weekend": {
    es: "Sab. y dom. a partir de las 13:30",
    en: "Sat. & Sun. from 1:30 PM",
    fr: "Sam. & dim. à partir de 13h30"
  },

  "piquillo": {
    es: "Pimientos de piquillo con ventresca caramelizados",
    en: "Caramelized piquillo peppers with tuna belly",
    fr: "Poivrons piquillo caramélisés au thon"
  },

  "oxtail": {
    es: "Canelones de rabo de toro",
    en: "Oxtail cannelloni",
    fr: "Cannellonis à la queue de bœuf"
  },

  "cannelloni": {
    es: "Canelones de carne o verdura",
    en: "Meat or vegetable cannelloni",
    fr: "Cannellonis à la viande ou aux légumes"
  },

  "tenderloin": {
    es: "Solomillo en salsa de boletus",
    en: "Tenderloin with porcini sauce",
    fr: "Filet sauce aux cèpes"
  },

  "chicken-pie": {
    es: "Pastel de pollo y verduras",
    en: "Chicken and vegetable pie",
    fr: "Tourte au poulet et aux légumes"
  },

  "cod": {
    es: "Bacalao a la riojana",
    en: "Cod Riojana style",
    fr: "Morue à la riojana"
  },

  "lentils": {
    es: "Lentejas con verduras",
    en: "Lentils with vegetables",
    fr: "Lentilles aux légumes"
  },

  "broths": {
    es: "Caldos",
    en: "Broths",
    fr: "Bouillons"
  },


  "to-finish": {
    es: "PARA TERMINAR",
    en: "TO FINISH",
    fr: "POUR TERMINER"
  },

  "desserts-title": {
    es: "Dulces",
    en: "Desserts",
    fr: "Desserts"
  },

  "dessert-description": {
    es: "Un pequeño capricho después de comer.",
    en: "A little treat after your meal.",
    fr: "Une petite douceur après le repas."
  },

  "cheese-flan": {
    es: "Flan de queso",
    en: "Cheese flan",
    fr: "Flan au fromage"
  },

  "apple-pie": {
    es: "Mini tarta de manzana",
    en: "Mini apple pie",
    fr: "Mini tarte aux pommes"
  },

  "apple-mousse": {
    es: "Mousse de queso con manzana",
    en: "Apple and cheese mousse",
    fr: "Mousse au fromage et à la pomme"
  },

  "rice-pudding": {
    es: "Arroz con leche",
    en: "Rice pudding",
    fr: "Riz au lait"
  },


  "bread-drinks": {
    es: "Pan, refrescos y vinos",
    en: "Bread, soft drinks and wine",
    fr: "Pain, boissons et vins"
  },

  "complete-meal": {
    es: "Para completar tus comidas y cenas.",
    en: "To complete your meals and dinners.",
    fr: "Pour accompagner vos repas et vos dîners."
  },


  "order": {
    es: "HAZ TU PEDIDO",
    en: "PLACE YOUR ORDER",
    fr: "PASSEZ VOTRE COMMANDE"
  },

  "waiting": {
    es: "Te esperamos",
    en: "We are waiting",
    fr: "Nous vous attendons"
  },

  "at-antonia": {
    es: "en Antonia.",
    en: "at Antonia.",
    fr: "chez Antonia."
  },

  "phone": {
    es: "Teléfono",
    en: "Phone",
    fr: "Téléphone"
  },

  "footer-description": {
    es: "Comida para llevar · Cocina casera",
    en: "Takeaway food · Homemade cooking",
    fr: "Plats à emporter · Cuisine maison"
  },

  "footer-note": {
    es: "Estos precios podrán ser cambiados por la dirección sin previo aviso.",
    en: "Prices may be changed by management without prior notice.",
    fr: "Les prix peuvent être modified by management without prior notice."
  }

};


/* =========================
   CAMBIO DE IDIOMA
========================= */

function changeLanguage(language) {

  document.querySelectorAll("[data-i18n]").forEach(element => {

    const key = element.getAttribute("data-i18n");

    if (
      translations[key] &&
      translations[key][language]
    ) {

      element.textContent =
        translations[key][language];

    }

  });


  document.documentElement.lang = language;


  document.querySelectorAll(".lang").forEach(button => {

    button.classList.toggle(
      "active",
      button.dataset.lang === language
    );

  });


  localStorage.setItem(
    "antonia-language",
    language
  );

}


/* =========================
   BOTONES DE IDIOMA
========================= */

document.querySelectorAll(".lang").forEach(button => {

  button.addEventListener("click", () => {

    changeLanguage(
      button.dataset.lang
    );

  });

});


/* =========================
   IDIOMA GUARDADO
========================= */

const savedLanguage =
  localStorage.getItem("antonia-language");

if (
  savedLanguage &&
  translations &&
  ["es", "en", "fr"].includes(savedLanguage)
) {

  changeLanguage(savedLanguage);

}