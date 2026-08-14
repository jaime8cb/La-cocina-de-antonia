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


window.addEventListener("scroll", () => {

  const header = document.querySelector(".header");

  if (window.scrollY > 30) {
    header.style.boxShadow = "0 5px 25px rgba(0,0,0,.20)";
  } else {
    header.style.boxShadow = "0 5px 20px rgba(0,0,0,.15)";
  }

});


const cards = document.querySelectorAll(".food-card, .rice-card, .dessert-card");

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
  card.style.transition = "opacity .6s ease, transform .6s ease";

  observer.observe(card);
});


const style = document.createElement("style");

style.innerHTML = `
  .rice-card.visible,
  .food-card.visible,
  .dessert-card.visible {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
`;

document.head.appendChild(style);