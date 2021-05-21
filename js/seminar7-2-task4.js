// 4. Create TODO list

const input = document.querySelector("#add-input");
const ol = document.querySelector("ol");

let currentId = 0;

const getTask = text => `
    <li data-id=${currentId++}>
    <span>${text}</span>
    <button type="button" id="done-${currentId++}" class="done" aria-label="Done">
        &radic;
    </button>
    <button type="button" class="close" aria-label="Close">
        &times;
    </button>
    </li>
`;

document.getElementById('add-btn').addEventListener('click', () => {
  ol.insertAdjacentHTML('beforeend', getTask(input.value));
  input.value = '';
  const todos = document.querySelectorAll('li');
  const currentTODO = todos[todos.length - 1];
  currentTODO.querySelector('.close').addEventListener('click', e => {
    currentTODO.remove();
  });
  const doneEvent = () => {
    currentTODO.style.background = 'green';
    currentTODO.querySelector('.done').removeEventListener('click', doneEvent);
  };
  currentTODO.querySelector('.done').addEventListener('click', doneEvent);
});



