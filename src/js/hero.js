import { getTickets } from '../api/getTicketsApi';

const inputEl = document.querySelector('.hero__input');
const listEl = document.querySelector('.cards__list');
const selectEl = document.querySelector('.hero__country');
const cardsSchedule = document.querySelector('.cards__schedule');

let currentPage = 0;
let totalPage = 1;

export let ticketsData = [];

async function renderTicket(page = 0) {
  try {
    
    const data = await getTickets(
      inputEl?.value || '',
      selectEl?.value || '',
      page
    );

    const tickets = data?._embedded?.events || [];
    totalPage = data?.page?.totalPages > 50 ? 50 : data?.page?.totalPages || 1;
    currentPage = page;

    ticketsData = tickets;

    const markup = tickets
      .map(
        item => `
        <li class="cards__item" data-id="${item.id}">
            <img src="${item.images?.[0]?.url || '/img/placeholderimg.png'}" 
                 alt="${item.name}"
                 class="cards__img">
            <div class="cards__item-contentb">
                <h1 class="cards__title">${item.name}</h1>
                <h2 class="cards__subtitle">${
                  item.dates?.start?.localDate || ''
                }</h2>
                <p class="cards__text">
                    <svg class="cards__svg"><use href="/img/symbol-defs.svg#icon-arrow"></use></svg>
                    ${item._embedded?.venues?.[0]?.name || 'Unknown Venue'}
                </p>
            </div>
        </li>`
      )
      .join('');

    listEl.innerHTML = markup;

    renderPagination();
  } catch (error) {
    console.error('Error:', error);
    listEl.innerHTML = '<p>Error</p>';
    cardsSchedule.innerHTML = '';
  }
}


function renderPagination() {
  cardsSchedule.innerHTML = '';
  if (totalPage <= 1) return;


  let startPage, endPage;

  if (totalPage <= 5) {
    startPage = 0;
    endPage = totalPage;
  } else {
    if (currentPage <= 2) {
      startPage = 0;
      endPage = 5;
    } else if (currentPage + 2 >= totalPage) {
      startPage = totalPage - 5;
      endPage = totalPage;
    } else {
      startPage = currentPage - 2;
      endPage = currentPage + 3;
    }
  }


  for (let i = startPage; i < endPage; i += 1) {
    const li = document.createElement('li');
    li.className = `cards__schedule-item ${
      i === currentPage ? 'active-page' : ''
    }`;
    li.innerHTML = `<p class="cards__schedule-text">${i + 1}</p>`;

    li.addEventListener('click', () => {
      if (i === currentPage) return; 
      window.scrollTo({ top: 0, behavior: 'smooth' });
      renderTicket(i);
    });

    cardsSchedule.appendChild(li);
  }
}




renderTicket(0);


inputEl?.addEventListener('change', () => renderTicket(0));
selectEl?.addEventListener('change', () => renderTicket(0));
