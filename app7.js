// function add(x, y) {
//     return x + y;
// }

// const subtract = function (x, y) {
//     return x - y;
// }

// function multiply(x, y) {
//     return x * y;
// }

// const divide = function (x, y) {
//     return x / y;
// }

// const operations = [add, subtract, multiply, divide];

// for (let func of operations) {
//     let result = func(100, 4);
//     console.log(result);
// }


// const thing = {
//     doSomething: add
// } 

//////////////////////////////
// Functions as arguments

// function callThreeTimes(f) {
//     f();
//     f();
//     f();
// }

// function cry() {
//     console.log('WAHHHH');
// }

// function rage() {
//     console.log('GRRRRR');
// }

// callThreeTimes(rage);

// function repeatNTimes(f, num) {
//     for (let i = 0; i < num; i++) {
//         f();
//     }
// }

// function cry() {
//     console.log("WAHHHHH");
// }

// function rage() {
//     console.log('GRRR');
// }

// // function add(x, y) {
// //     console.log(x + y);
// // }

// // repeatNTimes(add, 5, 4, 5);
// function randomPick() {
//     let pick = Math.floor(Math.random() * 2) + 1;
//     let numTimes = Math.floor(Math.random() * 10) + 1;
//     console.log(pick, numTimes);
//     if (pick === 1) {
//         repeatNTimes(cry, numTimes);
//     } else {
//         repeatNTimes(rage, numTimes);
//     }


// }

// randomPick();

// function multiplyBy(num) {
//     return function (val) {
//         return val * num;
//     }
// }

// const triple = multiplyBy(3);
// const double = multiplyBy(2);

// function makeBetweenFunc(min, max) {
//     return function (val) {
//         return val >= min && val <= max;
//     }
// }

// const isBetween = makeBetweenFunc(21, 98);

// setTimeout(function () {
//     alert("BWAAAAA");
// }, 5000);

// document.querySelector('.testButton').addEventListener('click', function () {
//     alert('clicked'); 
// });