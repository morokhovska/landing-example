'use strict';

var navSlide = function navSlide() {
  var burger = document.querySelector('.burger');
  var nav = document.querySelector('.nav');
  var navLinks = document.querySelectorAll('.nav__link');
  console.log('123');
  burger.addEventListener('click', function () {
    nav.classList.toggle('active');

    navLinks.forEach(function (link, index) {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = 'navLinkFade 0.5s ease forwards ' + (index / 7 + 0.5) + 's';
      }
    });
  });
};
navSlide();