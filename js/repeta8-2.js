// mousemove event & throttling (for scroll, resize, dragging)

const coordsOutputRef = document.querySelector(".js-coords");
let mouseMoveCbInvocationCounter = 0;

// window.addEventListener("mousemove", _.throttle(onMouseMove, 250));

function onMouseMove(e) {
    mouseMoveCbInvocationCounter += 1;

    coordsOutputRef.textContent = `
    Количество вызoвов onMousemove: ${mouseMoveCbInvocationCounter},
    X: ${e.clientX}, 
    Y: ${e.clientY}
    `;
}

// input event & debounce (for some event to be done)

const inputRef = document.querySelector(".js-input");
const outputRef = document.querySelector(".js-output");
let inputCbInvocationCounter = 0;

// inputRef.addEventListener("input", _.debounce(onInputChange, 300));

function onInputChange(e) {
    inputCbInvocationCounter += 1;

    outputRef.textContent = `
    Количество вызовов onInputChange: ${inputCbInvocationCounter}, 
    Значение: ${e.target.value}
    `;
}

// Фильтр с поиском:
// - Рендерим разметку элементов списка,
// - Слушаем изменение фильтра,
// - Фильтруем данные и рендерим новые элементы.

const techs = [
    { label: "HTML" },
    { label: "CSS" },
    { label: "SASS" },
    { label: "JavaScript" },
    { label: "Node.JS" },
    { label: "React" },
    { label: "Vue" },
    { label: "Angular" },
    { label: "Mobx" },
    { label: "Redux" },
    { label: "MongoDB" },
    { label: "Next.js" },
    { label: "GraphQL" },
];

const refs = {
    list: document.querySelector(".js-list"),
    input: document.querySelector("#filter"),
}

refs.input.addEventListener("input", _.debounce(onFilterChange, 300));

const listItemsMarkup = createListItemsMarkup(techs);
console.log(listItemsMarkup);

populateList(listItemsMarkup);

function createListItemsMarkup(items) {
    return items
        .map(item => `<li>${item.label}</li>`)
        .join("");
}

function onFilterChange(e) {
    const filter = e.target.value;

    const filteredItems = techs.filter(t =>
        t.label.toLowerCase().includes(filter),
    );
    
    const listItemsMarkup = createListItemsMarkup(filteredItems);
    populateList(listItemsMarkup);
}

function populateList(markup) {
    refs.list.innerHTML = markup;
}

// lazy loading concept
// https://github.com/luxplanjay/js-22/tree/08-2-lazy-load

