// example 1
const div = document.querySelector(".js-buttons");
div.addEventListener("click", handleNavClick);

function handleNavClick(event) {
    event.preventDefault();
    
  const target = event.target;
  console.log("event target: ", target); // event target: <button><a href="#" class="btn">Babel</a></button>

  // Проверяем тип узла, если не ссылка выходим из функции - guard clause
  if (target.nodeName !== "A") return;
  console.log(event.target.textContent); // Babel
}

// example 2

// option 1 - only one choice

/* const tagsContainer = document.querySelector(".js-tags");
tagsContainer.addEventListener("click", onTagsContainerClick);

function onTagsContainerClick(e) {
    if (e.target.nodeName !== "BUTTON") {
        return;
    }
    // console.log(e.target);
    
    const currentActiveBtn = document.querySelector(".active");
    // console.log(currentActiveBtn); // null при первом выбранном элементе

    if (currentActiveBtn) {
        currentActiveBtn.classList.remove("active");
    } // предотвращает множественный выбор

    const nextActiveBtn = e.target;
    nextActiveBtn.classList.add("active");
    
    selectedTag = nextActiveBtn.dataset.value;
    console.log(selectedTag);
} */

// option 2 - some options

const tagsContainer = document.querySelector(".js-tags");
const selectedTags = new Set();
    
tagsContainer.addEventListener("click", onTagsContainerClick);

function onTagsContainerClick(e) {
    if (e.target.nodeName !== "BUTTON") {
        return;
    }

    const isActive = e.target.classList.contains("active");
    
    if (isActive) {
        selectedTags.delete(e.target.dataset.value);
    } else {
        selectedTags.add(e.target.dataset.value);
    }

    e.target.classList.toggle("active");

    console.log(selectedTags); 
}