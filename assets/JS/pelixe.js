const slides = document.querySelectorAll('.slideshow p');
let slideIndex = 0;

function showSlides() {
  slides[slideIndex].style.opacity = 0;
  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].style.opacity = 1;
  setTimeout(showSlides, 5000); // Change slide every 5 seconds
}

showSlides();