const backdrop = document.querySelector('.backdrop');
const closeModal = document.querySelector('.modal__close');
const cardsList = document.querySelector('.cards__list'); // контейнер усіх карток

function modalHandler() {
  backdrop.classList.toggle('is__hidden');
  document.body.classList.toggle('no-scroll');
}

cardsList.addEventListener('click', (e) => {
  if (e.target.closest('.cards__item')) {
    modalHandler();
  }
});

if (closeModal) {
  closeModal.addEventListener('click', modalHandler);
}

backdrop.addEventListener('click', (e) => {
  if (e.target === backdrop) modalHandler();
});
