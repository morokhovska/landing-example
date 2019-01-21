let modal = document.getElementsByClassName('modal');
let modalBtnOpen = document.getElementsByClassName('modalYellowBtn');
let modalBtnClose = document.getElementsByClassName('closeBtn');

let openModal;
let closeModal;
for(let i = 0; i < modal.length; i++) {
  openModal = () => modal[i].style.display = 'block';
  closeModal = () => modal[i].style.display = 'none';
}

for(let i = 0; i < modalBtnOpen.length; i++) {
  modalBtnOpen[i].addEventListener('click', openModal);
}

for(let i = 0; i < modalBtnClose.length; i++) {
  modalBtnClose[i].addEventListener('click', closeModal);
}
window.addEventListener('click', (e) => {  
  for(let i = 0; i < modal.length; i++) {
    if(e.target == modal[i]) {
      modal[i].style.display = 'none';
    }
  }
})
