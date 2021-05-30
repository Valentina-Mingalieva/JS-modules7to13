// 1. Create infinity scroll of countries

let handlerCallCount = 0;
let startIndex = 0;
const COUNTRY_SEGMENT_COUNT = 20;

const listRef = document.querySelector('.country-list');

function scrollHandler() {
  console.log(++handlerCallCount);
  if (!isScrollToBottom()) return;

  renderPartOfCountries();

  if (startIndex >= countries.length) {
    window.removeEventListener('scroll', scrollHandler);
  }
}

window.addEventListener('scroll', scrollHandler);

function isScrollToBottom() {
  return window.innerHeight + window.scrollY >= document.body.offsetHeight;
}

function createCountryRef(country) {
  const countryRef = document.createElement('h2');
  countryRef.classList.add('country');
  countryRef.textContent = country;
  return countryRef;
}

function renderPartOfCountries() {
  const partOfCountries = countries.slice(
    startIndex, startIndex + COUNTRY_SEGMENT_COUNT,
  );
  const countryRefs = partOfCountries.map(createCountryRef);
  listRef.append(...countryRefs);
  startIndex += COUNTRY_SEGMENT_COUNT;
}
renderPartOfCountries();

/* // 2. Create country search

const listRef = document.querySelector('.country-list');

const searchRef = document.querySelector('.search');

searchRef.addEventListener('input', _.debounce(handleInput, 500));

function handleInput(event) {
  const search = event.target.value;
  const filteredCountries = countries.filter(country => {
    if (search === '') return true;

    return country.toLowerCase().includes(search.toLowerCase());
  });
  renderFilteredCountries(filteredCountries);
}

function renderFilteredCountries(filteredCountries) {
  listRef.innerHTML = '';

  const countryRefs = filteredCountries.map(createCountryRef);

  listRef.append(...countryRefs);
}

function createCountryRef(country) {
  const countryRef = document.createElement('h2');
  countryRef.classList.add('country');
  countryRef.textContent = country;
  return countryRef;
}

renderFilteredCountries(countries);

// 3. Create infinity scroll of countries with IntersectionObserver

let startIndex = 0;
const COUNTRY_COUNT = 10;

const listRef = document.querySelector('.country-list');
const anchorRef = document.querySelector('.anchor');

const observer = new IntersectionObserver(observerCallback, {
  threshold: 0,
});

observer.observe(anchorRef);

function observerCallback([entrie], observerRef) {
  if (!entrie.isIntersecting) return;

  renderPartOfCountries();

  if (startIndex >= countries.length) {
    observerRef.unobserve(anchorRef);
  }
}

function createCountryRef(country) {
  const countryRef = document.createElement('h2');
  countryRef.classList.add('country');
  countryRef.textContent = country;
  return countryRef;
}

function renderPartOfCountries() {
  const partOfCountries = countries.slice(
    startIndex,
    startIndex + COUNTRY_COUNT,
  );
  const contryRefs = partOfCountries.map(createCountryRef);

  listRef.append(...contryRefs);

  startIndex += COUNTRY_COUNT;
}

renderPartOfCountries(); */