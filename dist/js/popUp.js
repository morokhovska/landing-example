'use strict';

var modal = document.getElementsByClassName('modal');
var modalBtnOpen = document.getElementsByClassName('modalYellowBtn');
var modalBtnClose = document.getElementsByClassName('closeBtn');

var openModal = void 0;
var closeModal = void 0;

var _loop = function _loop(i) {
  openModal = function openModal() {
    return modal[i].style.display = 'block';
  };
  closeModal = function closeModal() {
    return modal[i].style.display = 'none';
  };
};

for (var i = 0; i < modal.length; i++) {
  _loop(i);
}

for (var i = 0; i < modalBtnOpen.length; i++) {
  modalBtnOpen[i].addEventListener('click', openModal);
}

for (var _i = 0; _i < modalBtnClose.length; _i++) {
  modalBtnClose[_i].addEventListener('click', closeModal);
}
window.addEventListener('click', function (e) {
  for (var _i2 = 0; _i2 < modal.length; _i2++) {
    if (e.target == modal[_i2]) {
      modal[_i2].style.display = 'none';
    }
  }
});