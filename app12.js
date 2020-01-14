//  DOM MANIPULATION

const allLis = document.querySelectorAll('li');

const colors = ["black", "purple", "green", "blue", "yellow", "teal"];

// for (let i = 0; i <= allLis.length; i++) {
//     allLis[i].style.color = colors[i];
// }

allLis.forEach((el, i) => {
    const color = colors[i];
    // console.log(el, color);
    el.style.color = color;
});