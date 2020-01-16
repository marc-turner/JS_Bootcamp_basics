// const btn = document.querySelector('button');

// btn.addEventListener('click', function() {
//     alert('CLICKED');
// });

// btn.addEventListener('mouseover', function() {
//     btn.innerText = 'OUCH';
// });

// btn.addEventListener('mouseleave', function() {
//     btn.innerText = 'CLICK THIS';
// });

// window.addEventListener('scroll', function() {
//     console.log('OHHHHH');
// });

// IMPOSSIBLE BUTTON DEMO //

// const btn = document.querySelector('button');

// btn.addEventListener('mouseover', function() {
//     console.log('mouseover');
//     const height = Math.floor(Math.random() * window.innerHeight);
//     const width = Math.floor(Math.random() * window.innerWidth);

//     btn.style.top = `${height}px`;
//     btn.style.left = `${width}px`;
// });

// btn.addEventListener('click', function() {
//     btn.innerText = 'You Got Me';
//     document.body.style.backgroundColor = 'green';
// });

// EVENTS ON MULTIPLE ELEMENTS //

// const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// const changeColor = function() {
//     const h1 = document.querySelector('h1');
//     console.log(`clicked a ${this.style.backgroundColor} box`);
//     h1.style.color = this.style.backgroundColor;
// };

// const container = document.querySelector('#container');

// for (let color of colors) {
//     const colorSquare = document.createElement('div');
//     colorSquare.classList.add('box');
//     colorSquare.style.backgroundColor = color;
//     container.appendChild(colorSquare);
//     colorSquare.addEventListener('click', changeColor);
// }

const addItemInput = document.querySelector('#textInput');
const inputList = document.querySelector('#inputList');

addItemInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const newListItem = this.value;
        const newListItemElement = document.createElement('li');
        // add input value to li
        newListItemElement.innerText = newListItem;
        // appendChild to ul
        inputList.appendChild(newListItemElement);
        this.value = '';
    }
});
