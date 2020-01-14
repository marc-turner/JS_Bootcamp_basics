//  DOM MANIPULATION

// const allLis = document.querySelectorAll('li');

// const colors = ["black", "purple", "green", "blue", "yellow", "teal"];

// // for (let i = 0; i <= allLis.length; i++) {
// //     allLis[i].style.color = colors[i];
// // }

// allLis.forEach((el, i) => {
//     const color = colors[i];
//     // console.log(el, color);
//     el.style.color = color;
// });

const todoItem = document.querySelector('#todos .todo');

// todoItem.style.color = "gray";
// todoItem.style.textDecoration = "line-through";
// todoItem.style.opacity = '50%';

todoItem.classList.toggle('done');

const newH2 = document.createElement('h2');
newH2.classList.add('special');
newH2.innerText = "I like Chinese!"

const section = document.querySelector('section');
section.appendChild(newH2);

const newImg = document.createElement('img');
newImg.src = "https://images.unsplash.com/photo-1480365501497-199581be0e66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60";

section.appendChild(newImg);

const parentUL = document.querySelector('ul');
const firstLI = document.querySelector('ul li');
const newli = document.createElement('li');
newli.innerText = "new LI";

parentUL.insertBefore(newli, firstLI);

const i = document.createElement('i');
i.innerText = "Hey there!!!";

const p = document.querySelector('p');

p.insertAdjacentElement('afterend', i);