let indiceActual = 0;

document.addEventListener("DOMContentLoaded", function() {
  mostrarSlides(indiceActual);
  crearIndicadores();
});

function cambiarSlides(n) {
  mostrarSlides(indiceActual += n);
}

function mostrarSlides(n) {
  let i;
  const slides = document.querySelectorAll('.imagen-carrusel');
  const indicadores = document.querySelectorAll('.indicador');
  if (n >= slides.length) {indiceActual = 0}
  if (n < 0) {indiceActual = slides.length - 1}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < indicadores.length; i++) {
      indicadores[i].className = indicadores[i].className.replace(" activo", "");
  }
  slides[indiceActual].style.display = "block";  
  indicadores[indiceActual].className += " activo";
}

function crearIndicadores() {
  const slideCount = document.querySelectorAll('.imagen-carrusel').length;
  const indicadoresContenedor = document.querySelector('.indicadores');
  
  for (let i = 0; i < slideCount; i++) {
    const indicador = document.createElement('span');
    indicador.classList.add('indicador');
    if (i === 0) indicador.classList.add('activo');
    indicador.addEventListener('click', (function(index) {
      return function() {
        mostrarSlides(indiceActual = index);
      }
    })(i));
    indicadoresContenedor.appendChild(indicador);
  }
}
