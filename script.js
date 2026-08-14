const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});


document.querySelectorAll("#navMenu a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
  });
});


const tabs = document.querySelectorAll(".tab");
const dishes = document.querySelectorAll(".dish");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {

    tabs.forEach(item => item.classList.remove("active"));
    tab.classList.add("active");

    const category = tab.dataset.category;

    dishes.forEach(dish => {

      if (category === "todos" || dish.dataset.category === category) {
        dish.classList.remove("hidden");
      } else {
        dish.classList.add("hidden");
      }

    });
  });
});


const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("current");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("current");
    }
  });

});