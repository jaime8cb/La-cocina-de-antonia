// Desplazamiento suave de la barra superior

document.querySelectorAll('.barra nav a').forEach(link => {

  link.addEventListener('click', function(e) {

    const destino = document.querySelector(
      this.getAttribute('href')
    );

    if (destino) {

      e.preventDefault();

      const posicion =
        destino.getBoundingClientRect().top +
        window.scrollY -
        80;

      window.scrollTo({
        top: posicion,
        behavior: 'smooth'
      });

    }

  });

});


// Pequeño efecto al pulsar los botones

document.querySelectorAll('.boton, .datos a').forEach(elemento => {

  elemento.addEventListener('touchstart', () => {
    elemento.style.transform = 'scale(.97)';
  });

  elemento.addEventListener('touchend', () => {
    elemento.style.transform = '';
  });

});