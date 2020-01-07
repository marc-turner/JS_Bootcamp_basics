// Shorthand object properties

// const getStats = (arr) => {
//     const max = Math.max(...arr);
//     const min = Math.min(...arr);
//     const sum = arr.reduce((sum, r) => sum + r);
//     const avg = sum / arr.length;
//     return {
//         max, min, sum, avg
//     }
// }

// const reviews = [4.5, 5.0, 3.44, 2.8, 3.5];

// const stats = getStats(reviews);

//////////////////////////
// Compound Properties

// const item = "album";
// const title = "Revolver";
// const who = "artist";
// const by = "The Beatles"

// const record = {
//     [item]: title,
//     [who]: by
// }

// const addProp = (obj, k, v) => {
//     return {
//         ...record, [k]: v
//     };
// };

// const res = addProp(record, "producer", "George Martin");

///////////////////////////////////
// Adding Methods to Objects

// const math = {
//     numbers: [1, 2, 3, 4],
//     add: function (x, y) {
//         return x + y;
//     },
//     multiply: function (x, y) {
//         return x * y;
//     }
// }

// SHORTHAND VERSION

// const math = {
//     numbers: [1, 2, 3, 4],
//     add(x, y) {
//         return x + y;
//     },
//     multiply(x, y) {
//         return x * y;
//     }
// }

///////////////////////////////
// "THIS"

// "this" referring to the window object
// function sayHi() {
//     console.log('Hi');
//     console.log(this);
// }

// 'this' referring to the parent object
const person = {
    first: 'Cherilyn',
    last: 'Sarkisian',
    nickName: 'Cher',
    fullName() {
        // console.log(`${this.first} ${this.last}'s nickname is ${this.nickName}`);
        const { first, last, nickName } = this;
        return (`${first} ${last}, who's nickname is ${nickName}`);
    },
    printBio() {
        const fullName = this.fullName();
        console.log(`${fullName}, is a person.`);
    }
}
