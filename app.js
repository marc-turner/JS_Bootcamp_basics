// alert("app.js file connected");

// if (1 === 1) {
//     console.log("It's true");
// }

// let rating = 3;
// if (rating === 3) {
//     console.log("You are a superstar!");
// }

// let rating = 3;

// if (rating === 3) {
//     console.log("SUPERSTAR");
// } else if (rating === 2) {
//     console.log("MEETS");
// } else if (rating === 1) {
//     console.log("NEEDS");
// } else {
//     console.log('INVALID');
// }

// let highScore = 1400;
// let userScore = 1250;

// if (userScore >= highScore) {
//     console.log(`Congrats, You have the new high score of ${userScore}`);
//     highScore = userScore;
//     console.log("high score: " + highScore);
// } else {
//     console.log(`Good Game, You did not beat the high score of ${highScore}.`);
//     console.log(`Your score: ${userScore}`);
//     console.log(`High Score: ${highScore}`);
// }

// let mystery = 5;

// if (mystery) {
//     console.log("TRUTHY");
// } else {
//     console.log("FALSEY");
// }

let mystery = 9;

// switch (mystery) {
//     case (1):
//         console.log("Monday");
//         break;
//     case (2):
//         console.log("Tuesday");
//         break;
//     case (3):
//         console.log("Wednesday");
//         break;
//     case (4):
//         console.log("Thursday");
//         break;
//     case (5):
//         console.log("Friday");
//         break;
//     case (6):
//         console.log("Saturday");
//         break;
//     case (7):
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Bad Number");
// }

// let num = 8;
// num === 7 ? console.log("True") : console.log("False");

// let status = "online";
// let color;
// if (status === "offline") {
//     color = " red"
// } else {
//     color = "green";
// }
// console.log(color);

let status = "online";
let color = status === "offline" ? "red" : "green";
console.log(color);