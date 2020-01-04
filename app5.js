//////////////////////////
// NESTED FOR LOOPS

// for (let i = 0; i <= 10; i++) {
//     console.log('OUTER LOOP: ', i);
//     for (let j = 10; j >= 0; j -= 5) {
//         console.log('    INNER LOOP: ', j);
//     }
// }

// const gameBoard = [
//     [4, 32, 8, 4],
//     [64, 8, 32, 3],
//     [8, 32, 16, 4],
//     [2, 8, 4, 2],
// ];

// let total = 0;
// for (let i = 0; i < gameBoard.length; i++) {
//     let row = gameBoard[i];
//     for (let j = 0; j < row.length; j++) {

//         total += row[j];
//     }
// }
// console.log(total);


///////////////////
// While loop
// const target = Math.floor(Math.random() * 10);
// let guess = Math.floor(Math.random() * 10);

// while (guess !== target) {
//     console.log(`Target: ${target} Guess: ${guess}`);
//     guess = Math.floor(Math.random() * 10);
// }
// console.log(`Target: ${target} Guess: ${guess}`);
// console.log('Congrats...You win');

////////////////////////
// for...of loop

// const subreddits = ['Soccer', 'popheads', 'cringe', 'pewdiepie'];

// for (let el of subreddits) {
//     console.log(el);
// }

// for (let char of 'hello') {
//     console.log(char);
// }

/////////////////////
// comparing for and for..of

// const magicSquare = [
//     [2, 7, 6],
//     [9, 5, 1],
//     [4, 3, 8],
// ];

// for (let i = 0; i < magicSquare.length; i++) {
//     let row = magicSquare[i];
//     let sum = 0;
//     for (let j = 0; j < row.length; j++) {
//         sum += row[j];
//     }
//     console.log(`${row} summed to ${sum}`);
// }

// for (let row of magicSquare) {
//     let sum = 0;
//     for (let num of row) {
//         sum += num;
//     }
//     console.log(`${row} summed to ${sum}`);
// }

// const words1 = ['mail', 'milk', 'bath', 'black'];
// const words2 = ['box', 'shake', 'tub', 'berry'];

// for (let i = 0; i < words1.length; i++) {
//     console.log(words1[i] + words2[i]);
// }

//////////////////////////////
// for...of w/ objects

// const movieReviews = {
//     Arrival: 9,
//     Alien: 8,
//     Amadeus: 9,
//     Coraline: 7.5,
//     'Star Wars': 10
// }

// // for (let movie of Object.keys(movieReviews)) {
// //     console.log(movie, movieReviews[movie]);
// // }
// let sum = 0;
// let ratings = Object.values(movieReviews);
// for (let rating of ratings) {
//     sum += rating;
// }
// console.log(`The average rating was ${sum / ratings.length}`);

///////////////////////////////
// for...in loops

const jeopardyWinnings = {
    regPlay: 2522700,
    watson: 300000,
    champions: 500000,
    battle: 100000
}

for (let prop in jeopardyWinnings) {
    console.log(prop);
}

let total = 0;
for (let prop in jeopardyWinnings) {
    total += jeopardyWinnings[prop];
}
console.log(`Total winnings: ${total}`);