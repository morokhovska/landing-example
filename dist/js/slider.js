"use strict";

var slideIndex = 1;

var plusSlides = function plusSlides(n) {
  showSlides(slideIndex += n);
};

var currentSlide = function currentSlide(n) {
  showSlides(slideIndex = n);
};

var showSlides = function showSlides(n) {
  var i = void 0;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dots__dot");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += "active";
};
showSlides(slideIndex);