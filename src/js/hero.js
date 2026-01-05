import debounce from 'lodash.debounce';

const inputEl = document.querySelector('.hero__input');

inputEl.addEventListener('input', debounce(searchCountry, 500));

function searchCountry(evt) {
    const countryName = evt.target.value.trim()
    inputEl.innerHTML = "";
    
}