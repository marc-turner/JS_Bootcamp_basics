// FUNCTIONS

// function rollDie(numSides) {
//     let cast = Math.floor(Math.random() * numSides) + 1;
//     console.log(cast);
// }

// // rollDie();

// function rollDice() {
//     rollDie();
//     rollDie();
//     rollDie();
//     rollDie();
// }

// rollDice();

///////////////////////
// Function with args

// function rollingDie(numRolls, numSides) {
//     for (let i = 0; i < numRolls; i++) {
//         rollDie(numSides);
//     }
// }

// rollingDie(4, 8);

function getCard() {
    let cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let suits = ['clubs', 'spades', 'hearts', 'diamonds'];

    // let randomCard = pickNum(cards);
    // let randomSuit = pickNum(suits);

    // let randomCard = cards[Math.floor(Math.random() * cards.length)];
    // let randomSuit = suits[Math.floor(Math.random() * suits.length)];

    // console.log(randomCard);
    // console.log(randomSuit);

    // const playingCard =
    return { value: pickNum(cards), suit: pickNum(suits) };

    // console.log(playingCard);
    //  playingCard;
}

function pickNum(arr) {
    const idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}