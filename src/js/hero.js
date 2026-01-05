import { getTickets } from '../api/getTicketsApi';

const inputEl = document.querySelector('.hero__input');
const listEl = document.querySelector('.cards__list');
const selectEl = document.querySelector('.hero__country');

async function renderTicket() {
  try {
    const data = await getTickets(
      inputEl?.value || '',
      selectEl?.value || '',
      0
    );

    const tickets = data?._embedded?.events || [];

    if (tickets.length === 0) {
      listEl.innerHTML =
        '<p class="error-message">Нічого не знайдено за вашим запитом</p>';
      return;
    }

    const markup = tickets
      .map(item => {
        return `
            <li class="cards__item">
                <img src="${
                  item.images?.[0]?.url || '/img/placeholderimg.png'
                }" 
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
            </li>`;
      })
      .join('');

    listEl.innerHTML = markup;
  } catch (error) {
    console.log(error);
    
  }
}

renderTicket();

inputEl?.addEventListener('change', renderTicket);
selectEl?.addEventListener('change', renderTicket);
