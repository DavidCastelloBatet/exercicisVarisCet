// Font del codi base
// https://www.hazunaweb.com/blog/como-crear-un-slider-de-imagenes-con-javascript/

var slideIndex = 0;

showSlides();

function showSlides() {
 // Recullo tots els divs amb la clase mySlides i itero
 // les posicions de l'objecte slides aplicant-li 
 // style.display = "none" a totes les imatges
  let slides = document.getElementsByClassName("mySlides");
  console.log(typeof slides);
  for (let i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";
  }

  slideIndex++;
  console.log(slideIndex);
  // Comprobo que l'index estigui dins de lenght. Si està fora
  // de rang el poso a 1
  if(slideIndex > slides.length) {
    slideIndex = 1
  }
  // modifico el display a la posició de l'array que em ve del
  // contador slideIndex.
  slides[slideIndex-1].style.display = "block";
  console.log( slides[slideIndex-1]);
  // setTimeout s'executa un cop. Li paso la funció i
  // el parámetre a 4000ms
  setTimeout(showSlides,4000);
}