import { ticketsData } from './hero';

const backdrop = document.querySelector('.backdrop');
const closeModal = document.querySelector('.modal__close');
const cardsList = document.querySelector('.cards__list');

const modalImg = document.querySelector('.modal__img');
const modalImage = document.querySelector('.modal__image');
const modalTitle = document.querySelector('.title');
const modalDate = document.querySelector('.date');
const modalVenue = document.querySelector('.venue');
const modalDescription = document.querySelector('.description');
const modalPriceStandart = document.querySelector('.pstandart');
const modalPriceVip = document.querySelector('.pvip');

function modalHandler() {
  backdrop.classList.toggle('is__hidden');
  document.body.classList.toggle('no-scroll');
}

function updateModalInfo(evt) {
  const card = evt.target.closest('.cards__item');
  if (!card) return;

  const id = card.dataset.id;
  const ticket = ticketsData.find(item => item.id === id);
  if (!ticket) return;

  modalImg.src = ticket.images?.[0]?.url || '/img/placeholderimg.png';
  modalImage.src = ticket.images?.[0]?.url || '/img/placeholderimg.png';
  modalTitle.textContent = ticket.name;
  modalDate.textContent = ticket.dates?.start?.localDate || 'Unknown date';
  modalVenue.textContent =
    ticket._embedded?.venues?.[0]?.name || 'Unknown venue';
  modalDescription.textContent =
    ticket.info || ticket.pleaseNote || 'No additional information';

  const prices = ticket.priceRanges || [];

  const standart = prices.find(p => p.type?.toLowerCase() === 'standard');
  const vip = prices.find(p => p.type?.toLowerCase() === 'vip');

  function formatPrice(p) {
    if (!p) return 'Not available';
    if (p.min === p.max) return `${p.min} ${p.currency}`;
    return `${p.min}–${p.max} ${p.currency}`;
  }

  modalPriceStandart.innerHTML = `
    <svg class="modal__svg">
      <use href="./img/symbol-defs.svg#icon-ticket"></use>
    </svg>
    Standart ${formatPrice(standart)}
  `;

  modalPriceVip.innerHTML = `
    <svg class="modal__svg">
      <use href="./img/symbol-defs.svg#icon-ticket"></use>
    </svg>
    VIP ${formatPrice(vip)}
  `;
}

cardsList.addEventListener('click', e => {
  if (e.target.closest('.cards__item')) {
    updateModalInfo(e);
    modalHandler();
  }
});

closeModal?.addEventListener('click', modalHandler);

backdrop.addEventListener('click', e => {
  if (e.target === backdrop) modalHandler();
});
