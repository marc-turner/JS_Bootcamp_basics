// forEach();

const numbers = [20, 21, 22, 23, 24, 25, 26, 27];

// numbers.forEach(function (num) {
//     console.log(num * 2);
// });

// function printTriple(num) {
//     console.log(num * 3);
// }

// numbers.forEach(printTriple);

numbers.forEach(function (idx, num) {
    console.log(num, idx);
});

