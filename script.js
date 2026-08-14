/* =========================
   MENÚ MÓVIL
========================= */

const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("open");
});

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
  });
});


/* =========================
   ANIMACIONES
========================= */

const cards = document.querySelectorAll(
  ".food-card, .rice-card, .dessert-card"
);

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.12
  }
);

cards.forEach(card => {
  card.style.opacity = "0";
  card.style.transform = "translateY(20px)";
  card.style.transition =
    "opacity .6s ease, transform .6s ease";

  observer.observe(card);
});


/* =========================
   IDIOMAS
========================= */

const translations = {

  /* ---------- GENERAL ---------- */

  "Inicio": {
    en: "Home",
    fr: "Accueil"
  },

  "Arroces": {
    en: "Rice dishes",
    fr: "Riz"
  },

  "Para llevar": {
    en: "Takeaway",
    fr: "À emporter"
  },

  "Dulces": {
    en: "Desserts",
    fr: "Desserts"
  },

  "Contacto": {
    en: "Contact",
    fr: "Contact"
  },

  "COCINA CASERA": {
    en: "HOMEMADE FOOD",
    fr: "CUISINE MAISON"
  },

  "Comida para llevar": {
    en: "Takeaway food",
    fr: "Plats à emporter"
  },

  "Hecha con": {
    en: "Made with",
    fr: "Préparée avec"
  },

  "cariño.": {
    en: "love.",
    fr: "amour."
  },

  "El sabor de la cocina de siempre, preparado para que solo tengas que sentarte y disfrutar.": {
    en: "The taste of traditional homemade cooking, prepared so you only have to sit back and enjoy.",
    fr: "Le goût de la cuisine traditionnelle, préparée pour que vous n’ayez plus qu’à vous asseoir et profiter."
  },

  "Ver la carta": {
    en: "View menu",
    fr: "Voir la carte"
  },

  "COMIDA PARA LLEVAR": {
    en: "TAKEAWAY FOOD",
    fr: "PLATS À EMPORTER"
  },

  "Como en casa,": {
    en: "Just like home,",
    fr: "Comme à la maison,"
  },

  "pero sin cocinar.": {
    en: "without the cooking.",
    fr: "sans cuisiner."
  },

  "Platos caseros preparados con mimo, recetas tradicionales y ese sabor que nos recuerda a la cocina de siempre.": {
    en: "Homemade dishes prepared with care, traditional recipes and that familiar taste of home cooking.",
    fr: "Des plats faits maison préparés avec soin, des recettes traditionnelles et ce goût qui rappelle la cuisine d'autrefois."
  },


  /* ---------- ARROCES ---------- */

  "POR ENCARGO": {
    en: "MADE TO ORDER",
    fr: "SUR COMMANDE"
  },

  "Mínimo 4 raciones": {
    en: "Minimum 4 portions",
    fr: "Minimum 4 portions"
  },

  "Verduras": {
    en: "Vegetable",
    fr: "Légumes"
  },

  "Verduras con pollo": {
    en: "Vegetables with chicken",
    fr: "Légumes au poulet"
  },

  "Mixta": {
    en: "Mixed paella",
    fr: "Paella mixte"
  },

  "Paella de marisco": {
    en: "Seafood paella",
    fr: "Paella aux fruits de mer"
  },

  "A banda": {
    en: "A banda rice",
    fr: "Riz a banda"
  },

  "Señoret": {
    en: "Señoret rice",
    fr: "Riz señoret"
  },

  "Arroz negro con sepia": {
    en: "Black rice with cuttlefish",
    fr: "Riz noir à la seiche"
  },

  "Fideuá": {
    en: "Fideuà",
    fr: "Fideuà"
  },

  "Paella de marisco con cigala": {
    en: "Seafood paella with langoustine",
    fr: "Paella aux fruits de mer et langoustine"
  },

  "Arroz con bogavante": {
    en: "Rice with lobster",
    fr: "Riz au homard"
  },


  /* ---------- PARA LLEVAR ---------- */

  "Platos caseros": {
    en: "Homemade dishes",
    fr: "Plats faits maison"
  },

  "Preparados para disfrutar donde quieras.": {
    en: "Prepared for you to enjoy wherever you want.",
    fr: "Préparés pour être dégustés où vous voulez."
  },

  "Pollo asado": {
    en: "Roast chicken",
    fr: "Poulet rôti"
  },

  "Tortilla de patatas": {
    en: "Spanish omelette",
    fr: "Tortilla espagnole"
  },

  "Chipirones en su tinta": {
    en: "Baby squid in ink sauce",
    fr: "Petits calamars à l'encre"
  },

  "Pisto manchego": {
    en: "Manchego vegetable stew",
    fr: "Pisto manchego"
  },

  "1/4 Empanada casera": {
    en: "1/4 Homemade empanada",
    fr: "1/4 Empanada maison"
  },

  "Ensaladilla rusa": {
    en: "Russian salad",
    fr: "Salade russe"
  },

  "Ensaladilla de pimientos asados": {
    en: "Roasted pepper salad",
    fr: "Salade de poivrons grillés"
  },

  "Ensaladilla de la casa": {
    en: "House salad",
    fr: "Salade maison"
  },

  "Albóndigas": {
    en: "Meatballs",
    fr: "Boulettes de viande"
  },

  "Patatas fritas caseras": {
    en: "Homemade fries",
    fr: "Frites maison"
  },

  "Pequeña": {
    en: "Small",
    fr: "Petite"
  },

  "Grande": {
    en: "Large",
    fr: "Grande"
  },

  "Croquetas": {
    en: "Croquettes",
    fr: "Croquettes"
  },

  "Lasaña de carne o verdura": {
    en: "Meat or vegetable lasagna",
    fr: "Lasagnes à la viande ou aux légumes"
  },

  "Arroz blanco": {
    en: "White rice",
    fr: "Riz blanc"
  },

  "Berenjenas fritas crujientes con miel": {
    en: "Crispy fried aubergine with honey",
    fr: "Aubergines frites croustillantes au miel"
  },

  "Boquerones en vinagre": {
    en: "Anchovies in vinegar",
    fr: "Anchois au vinaigre"
  },

  "Pimientos fritos": {
    en: "Fried peppers",
    fr: "Poivrons frits"
  },

  "Gazpacho y salmorejo": {
    en: "Gazpacho and salmorejo",
    fr: "Gaspacho et salmorejo"
  },

  "Paella mixta por raciones": {
    en: "Mixed paella by portion",
    fr: "Paella mixte à la portion"
  },

  "Pimientos de piquillo con ventresca caramelizados": {
    en: "Caramelized piquillo peppers with tuna belly",
    fr: "Poivrons piquillo caramélisés au thon"
  },

  "Canelones de rabo de toro": {
    en: "Oxtail cannelloni",
    fr: "Cannellonis à la queue de bœuf"
  },

  "Canelones de carne o verdura": {
    en: "Meat or vegetable cannelloni",
    fr: "Cannellonis à la viande ou aux légumes"
  },

  "Solomillo en salsa de boletus": {
    en: "Tenderloin with porcini sauce",
    fr: "Filet sauce aux cèpes"
  },

  "Pastel de pollo y verduras": {
    en: "Chicken and vegetable pie",
    fr: "Tourte au poulet et aux légumes"
  },

  "Bacalao a la riojana": {
    en: "Cod Riojana style",
    fr: "Morue à la riojana"
  },

  "Lentejas con verduras": {
    en: "Lentils with vegetables",
    fr: "Lentilles aux légumes"
  },

  "Caldos": {
    en: "Broths",
    fr: "Bouillons"
  },


  /* ---------- DULCES ---------- */

  "PARA TERMINAR": {
    en: "TO FINISH",
    fr: "POUR TERMINER"
  },

  "Un pequeño capricho después de comer.": {
    en: "A little treat after your meal.",
    fr: "Une petite douceur après le repas."
  },

  "Tiramisú": {
    en: "Tiramisu",
    fr: "Tiramisu"
  },

  "Flan de queso": {
    en: "Cheesecake flan",
    fr: "Flan au fromage"
  },

  "Mini tarta de manzana": {
    en: "Mini apple pie",
    fr: "Mini tarte aux pommes"
  },

  "Mousse de queso con manzana": {
    en: "Apple and cheese mousse",
    fr: "Mousse au fromage et à la pomme"
  },

  "Arroz con leche": {
    en: "Rice pudding",
    fr: "Riz au lait"
  },


  /* ---------- CONTACTO ---------- */

  "HAZ TU PEDIDO": {
    en: "PLACE YOUR ORDER",
    fr: "PASSEZ VOTRE COMMANDE"
  },

  "Te esperamos": {
    en: "We are waiting",
    fr: "Nous vous attendons"
  },

  "en Antonia.": {
    en: "at Antonia.",
    fr: "chez Antonia."
  },

  "Teléfono": {
    en: "Phone",
    fr: "Téléphone"
  },

  "WhatsApp": {
    en: "WhatsApp",
    fr: "WhatsApp"
  },

  "Pan, refrescos y vinos": {
    en: "Bread, soft drinks and wine",
    fr: "Pain, boissons et vins"
  },

  "Para completar tus comidas y cenas.": {
    en: "To complete your meals and dinners.",
    fr: "Pour accompagner vos repas et vos dîners."
  },

  "Comida para llevar · Cocina casera": {
    en: "Takeaway food · Homemade cooking",
    fr: "Plats à emporter · Cuisine maison"
  },

  "Estos precios podrán ser cambiados por la dirección sin previo aviso.": {
    en: "Prices may be changed by management without prior notice.",
    fr: "Les prix peuvent être modifiés par la direction sans préavis."
  }

};


/* =========================
   SISTEMA DE IDIOMAS
========================= */

const originalTexts = new WeakMap();

/* Guardamos el texto original de cada elemento */
document.querySelectorAll("body *").forEach(element => {

  if (element.children.length === 0) {
    const text = element.textContent.trim();

    if (text) {
      originalTexts.set(element, text);
    }
  }

});


function translatePage(language) {

  document.querySelectorAll("body *").forEach(element => {

    if (element.children.length !== 0) return;

    const original = originalTexts.get(element);

    if (!original) return;

    /* Español */
    if (language === "es") {
      element.textContent = original;
      return;
    }

    /* Inglés */
    if (
      translations[original] &&
      translations[original].en
    ) {
      element.textContent =
        translations[original].en;
      return;
    }

    /* Francés */
    if (
      translations[original] &&
      translations[original].fr
    ) {
      element.textContent =
        translations[original].fr;
    }

  });

}


/* =========================
   BOTONES
========================= */

const languageButtons =
  document.querySelectorAll(".lang");


languageButtons.forEach(button => {

  button.addEventListener("click", function () {

    const language =
      this.getAttribute("data-lang");

    /* Cambiar botón activo */

    languageButtons.forEach(btn => {
      btn.classList.remove("active");
    });

    this.classList.add("active");

    /* Traducir */

    translatePage(language);

    /* Guardar idioma */

    localStorage.setItem(
      "antonia-language",
      language
    );

  });

});


/* =========================
   IDIOMA GUARDADO
========================= */

const savedLanguage =
  localStorage.getItem("antonia-language");

if (savedLanguage) {

  const savedButton =
    document.querySelector(
      `.lang[data-lang="${savedLanguage}"]`
    );

  if (savedButton) {

    languageButtons.forEach(btn => {
      btn.classList.remove("active");
    });

    savedButton.classList.add("active");

    translatePage(savedLanguage);
  }

}