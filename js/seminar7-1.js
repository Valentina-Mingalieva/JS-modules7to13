// 1. We have a list of elements on html page:
// - Print a text content of elements,
// - add element "Coke",
// - color text in list in red.

/* const elements = document.querySelectorAll("li");

elements.forEach(el => console.log(el.textContent));

// elements[elements.length - 1].insertAdjacentHTML("afterend", "<li>Coke</li>");

const li = document.createElement("li");
li.appendChild(document.createTextNode("Coke"));
elements[0].parentNode.appendChild(li);

document.querySelectorAll("li").forEach(el => {
    el.style.color = "red";
}); */


// 2. We have a list of numbers. Remove all even numbers. Replace text to image https://i.picsum.photos/id/65/200/200.jpg?hmac=pZrTO_F80X2VYUVpgorpj6xM_WABGhjIXYieK__8B50

/* const elements = document.querySelectorAll("li");

elements.forEach(el => {
    if (parseInt(el.innerText) % 2 === 0) el.remove();
});

const currentElements = document.querySelectorAll("li");
currentElements.forEach(el => {
    const image = document.createElement("img");
    image.setAttribute("src", "https://i.picsum.photos/id/65/200/200.jpg?hmac=pZrTO_F80X2VYUVpgorpj6xM_WABGhjIXYieK__8B50")
    el.innerHTML = "";
    el.appendChild(image);
}) */


// 3. Create a list of 3 random images. List should be enumerated.

/* const images = [
    'https://i.picsum.photos/id/952/200/200.jpg?hmac=6jMF0yOT214qb0hW6aUyexMo9flTRxyQbV8jYPcVolM',
    'https://i.picsum.photos/id/658/200/200.jpg?hmac=f24wxXCkgtH72eZ6mY95KRxTyvEG-_3ysR9z-R0a1QM',
    'https://i.picsum.photos/id/230/200/200.jpg?hmac=8tI9ISupCMivMI7f7Q6i24FcYAg812XUEYJFZtaXp_8'
];

const ol = document.createElement('ol');
for(const image of images) {
    const li = document.createElement('li');
    const imageTag = document.createElement('img');
    ol.appendChild(li);
    li.appendChild(imageTag);


    imageTag.setAttribute('alt', 'random image');
    imageTag.src = image;
}

document.body.appendChild(ol); */

// 4. Merge two list in one without dublicates

const lis = document.querySelectorAll('li');

const merged = document.createElement('ol');

const lisFiltered = 
    [...lis].filter(
        (value, index, array) => 
        array.findIndex(
            (findIndexValue) => findIndexValue.firstElementChild.getAttribute('src') === value.firstElementChild.getAttribute('src')
        ) === index);

lisFiltered.forEach(el => merged.appendChild(el));

document.body.innerHTML = '';
document.body.appendChild(merged);

// ODER

// Решить задачу за list1.length + list2.length O(n+k) итераций;
// Сейчас работает за list1.length*list2.length O((n+k)^2)

const [list1, list2] = document.querySelectorAll('ol');

const uniquelist = new Set(); // O(1)
list1.querySelectorAll('li').forEach(el => {
  uniquelist.add(el.firstElementChild.getAttribute('src'));
});

list2.querySelectorAll('li').forEach(el => {
  if (!uniquelist.has(el.firstElementChild.getAttribute('src'))) {
    list1.appendChild(el.cloneNode(true));
  }
});

document.body.innerHTML = '';
document.body.appendChild(list1);

// 5. Set class 'red-score' to score under 10, set class 'green-score' to other score

const table = document.querySelector('table');

const lines = table.querySelectorAll('td');
lines.forEach(line => {
    const innerInt = parseInt(line.innerText);
    if( !isNaN(innerInt)) {
        if(innerInt < 10) {
            line.classList.add('red-score');
        } else {
            line.classList.add('green-score');
        }
    }
})
