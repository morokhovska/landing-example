"use strict";

var slideIndex = 0;
var dots = document.getElementsByClassName("dots__dot");
var slides = document.getElementsByClassName("mySlides");
showSlides();
currentSlide();

function showSlides() {

  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (var _i = 0; _i < dots.length; _i++) {
    dots[_i].className = dots[_i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

  setTimeout(showSlides, 3000);
}

function currentSlide() {
  var _loop = function _loop(i) {
    dots[i].addEventListener('click', function () {
      return i;
    });
  };

  for (var i = 0; i < dots.length; i++) {
    _loop(i);
  }
}