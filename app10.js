// default parameters

// function multiply(x, y = 1) {
//     return x * y;
// }

// const greet = (person, greeting = "Hi") => {
//     return `${greeting} ${person}`;
// }

//////////////////////////
//  spread   (...arg)

// const nums = [2, 5, 9, 12, 43];
// const answer = Math.max(nums);
// const spreadAnswer = Math.max(...nums);

// spread in array literals

// const sixties = ["The Beatles", "The Rolling Stones", "The Kinks"];
// const seveties = ["Boston", "The Eagles", "Jim Croce", "Kansas"];
// const eighties = ["U2", "REM", "The Replacements", "The Knack"];

// const prePunk = [...sixties, ...seveties];
// const postPunk = ["Television", "The Talking Heads", ...eighties];

// spread in object literals

// const punk = { influences: "New York Dolls", guitarSound: "distorted" };
// const funk = { classicEra: '70"s', beat: 'funky' };

// const theChiliPeppers = { ...funk, ...punk };

///////////////////////////
// Arguments Object - A MEH THING

// function sum() {
//     console.log(arguments);
// };

// function sumReduce() {
//     const sumArray = [...arguments];
//     return sumArray.reduce((total, currVal) => {
//         return total + currVal;
//     });
// };

// function sumRest(...nums) {
//     // console.log(nums);
//     return nums.reduce((total, currVal) => {
//         return total + currVal;
//     });
// };

// with arrow functions and implied returns

// const multiply = (...nums) => (
//     nums.reduce((total, currVal) => total * currVal)
// )

////////////////////////////////////
// Destructuring Arrays

// const beatlesRecords = [
//     "Meet the Beatles",
//     "Second Album",
//     "A Hard Days Night",
//     "Yesterday and Today"
// ]

// const [first, second, third] = beatlesRecords;

// const [first, , , forth] = beatlesRecords;
// const [first, ...theRest] = beatlesRecords;

// Deconstructing Objects

// const beatlesRecord = {
//     title: "Revolver",
//     year: 1965,
//     producer: "George Martin",
//     label: "Capital"
// }

// const { title, year } = beatlesRecord;
// const { title: album, year: when } = beatlesRecord;
// const { title, year, ...more } = beatlesRecord;

// Nested Deconstructuring

// const beatlesAlbums = [
//     {
//         title: "Meet the Beatles",
//         year: 1963
//     },
//     {
//         title: "Second Album",
//         year: 1963
//     },
//     {
//         title: "A Hard Days Night",
//         year: 1964
//     },
//     {
//         title: "Yesterday and Today",
//         year: 1964
//     },
// ]

// const [{ title: album }, { year }] = beatlesAlbums

// Destructuring Params

// WITH OBJECTS

// const theBeatles = {
//     bass: "Paul",
//     leadGuitar: "George",
//     guitar: "John",
//     drums: "Ringo"
// }

// function print(band) {
//     const { bass, guitar, drums } = band;
//     console.log(`${bass}, ${guitar}, ${drums}`);
// }

// OR ///

// function print({ bass, guitar, drums }) {
//     console.log(`${bass}, ${guitar}, ${drums}`);
// }

//  WITH ARRAYS

const beatles = ["John", "Paul", "George", "Ringo"];

function members([guitar, bass, leadGuitar, drums]) {
    console.log(`bass: ${bass}`);
}