// 1. Create Maze game
// - Game starts when mouse croosses green line
// - Game ends when mouse croosses light green field
// - User wins when mouse croosses light red line

const refs = {
    start: document.querySelector(".start"),
    finish: document.querySelector(".finish"),
    indicator: document.querySelector("#indicator"),
    maze: document.querySelector("#maze"),
}

let isPlay = false;

refs.start.addEventListener("mouseover", handleStartMouseOver);
refs.finish.addEventListener("mouseover", handleFinishMouseOver);
refs.maze.addEventListener("mouseover", handleMazeEnter);
refs.maze.addEventListener("mouseleave", handleMazeLeave);

function handleStartMouseOver() {
    refs.indicator.textContent = "Play";
    isPlay = true;
}

function handleFinishMouseOver() {
    if (isPlay) {
        refs.indicator.textContent = "Winner";
        isPlay = false;
    }
}

function handleMazeEnter(e) {
    if (isPlay && e.target.classList.contains("block")) {
        isPlay = false;
        refs.indicator.textContent = "You lose!";
    } 
}

function handleMazeLeave(e) {
    if (isPlay) {
        refs.indicator.textContent = "Pause";
        isPlay = false;
    } 
}

// 2. Paint block when mouse on button

const mouseOverListener = e => {
  if (e.target.classList.contains('card__delete')) {
    e.currentTarget.classList.add('card_focus');
  }
};

const mouseOutListener = e => {
  if (e.target.classList.contains('card__delete')) {
    e.currentTarget.classList.remove('card_focus');
  }
};

const cardRef = document.querySelector('.card');

cardRef.addEventListener('mouseover', mouseOverListener);
cardRef.addEventListener('mouseout', mouseOutListener);

// 3. Create accordion

const treeRef = document.querySelector('.tree');

treeRef.addEventListener('click', event => {
  if (!event.target.classList.contains('tree__item')) return;

  const subTreeRef = event.target.querySelector('.tree__sub-tree');
  if (!subTreeRef) return;

  if (subTreeRef.classList.contains('tree__sub-tree_open')) {
    subTreeRef.querySelectorAll('.tree__sub-tree').forEach(ref => {
      ref.classList.remove('tree__sub-tree_open');
    });
  }

  subTreeRef.classList.toggle('tree__sub-tree_open');
});

// 4. Create debounce and throttle. Write in console scroll time.

const divEl = document.querySelector("#my-id");

function handleBodyScroll() {
    console.log("scroll", new Date());
}

function throttle(callback, delay) {
    let id;

    return function () {
        if (id) {
            return;
        }

        id = setTimeout(() => {
            callback();
            id = 0;
        }, delay);
    }
}

// divEl.addEventListener("scroll", throttle(handleBodyScroll, 1000));

function debounce(callback, delay) {
    let id;

    return function () {
        if (id) {
            clearTimeout(id);
        }
        id = setTimeout(() => {
            callback();
            id = 0;
        }, delay);
    }
}

divEl.addEventListener("scroll", debounce(handleBodyScroll, 1000));