/* =========================
   MENÚ HAMBURGUESA
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
   SOMBRA DEL HEADER
========================= */

window.addEventListener("scroll", () => {

  const header = document.querySelector(".header");

  if (window.scrollY > 30) {

    header.style.boxShadow =
      "0 5px 25px rgba(0,0,0,.20)";

  } else {

    header.style.boxShadow =
      "0 5px 20px rgba(0,0,0,.15)";

  }

});


/* =========================
   ANIMACIONES DE LAS CARTAS
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

  card.style.transform =
    "translateY(20px)";

  card.style.transition =
    "opacity .6s ease, transform .6s ease";

  observer.observe(card);

});


const style = document.createElement("style");

style.innerHTML = `

  .rice-card.visible,
  .food-card.visible,
  .dessert-card.visible {

    opacity: 1 !important;

    transform:
      translateY(0) !important;

  }

`;

document.head.appendChild(style);


/* =========================
   SISTEMA DE IDIOMAS
========================= */

const languageButtons =
  document.querySelectorAll(".lang-btn");

const translatedElements =
  document.querySelectorAll("[data-es]");


function changeLanguage(language) {

  /*
   * Cambiamos todos los elementos que
   * tengan traducciones.
   */

  translatedElements.forEach(element => {

    const translation =
      element.getAttribute("data-" + language);

    if (translation !== null) {

      element.textContent = translation;

    }

  });


  /*
   * Actualizamos el idioma del documento.
   */

  document.documentElement.lang = language;


  /*
   * Marcamos el botón seleccionado.
   */

  languageButtons.forEach(button => {

    button.classList.remove("active");

    if (button.dataset.lang === language) {

      button.classList.add("active");

    }

  });


  /*
   * Guardamos el idioma elegido.
   * Así, si vuelve a entrar en la web,
   * conserva su elección.
   */

  localStorage.setItem(
    "antoniaLanguage",
    language
  );

}


/* =========================
   BOTONES ES / EN / FR
========================= */

languageButtons.forEach(button => {

  button.addEventListener("click", () => {

    const language =
      button.dataset.lang;

    changeLanguage(language);

    /*
     * Cerramos el menú después
     * de seleccionar el idioma.
     */

    nav.classList.remove("open");

  });

});


/* =========================
   IDIOMA INICIAL
========================= */

const savedLanguage =
  localStorage.getItem("antoniaLanguage");


if (
  savedLanguage === "es" ||
  savedLanguage === "en" ||
  savedLanguage === "fr"
) {

  changeLanguage(savedLanguage);

} else {

  changeLanguage("es");

}