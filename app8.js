// forEach();

// const numbers = [20, 21, 22, 23, 24, 25, 26, 27];

// numbers.forEach(function (num) {
//     console.log(num * 2);
// });

// function printTriple(num) {
//     console.log(num * 3);
// }

// numbers.forEach(printTriple);

// numbers.forEach(function (idx, num) {
//     console.log(num, idx);
// });

//////////////////////////////////////
// map()


// const numbers = [20, 21, 22, 23, 24, 25, 26, 27];
// const words = ['asap', 'byob', 'rsvp', 'diy'];

// const doubles = numbers.map(function (num) {
//     return num * 2;
// });

// const numDetail = numbers.map(function (n) {
//     return {
//         value: n,
//         isEven: n % 2 === 0
//     }
// });

// const newWord = words.map(function (word) {
//     return word.toUpperCase().split("").join(".");
// });

// const records = [
//     {
//         title: "Revolver",
//         artist: "The Beatles",
//         year: 1966
//     },
//     {
//         title: "The Police",
//         artist: "The Police",
//         year: 1980
//     },
//     {
//         title: "OK Computer",
//         artist: "Radiohead",
//         year: 1999
//     },
//     {
//         title: "Hotel California",
//         artist: "The Eagles",
//         year: 1976
//     },
// ]

// const recordTitles = records.map(function (record) {
//     return record.title;
// });

//////////////////////////////////
// Array.find()

// const records = [
//     "Boston",
//     "OK Computer",
//     "Revolver",
//     "War",
//     "Let It Be"
// ]

// const record = records.find(album => {
//     return album.includes("o");
// });

// const record2 = records.find(r => (
//     r.indexOf("W") === 0
// ));

const records = [
    {
        title: "Revolver",
        artist: "The Beatles",
        year: 1966
    },
    {
        title: "Rubber Soul",
        artist: "The Beatles",
        year: 1965
    },
    {
        title: "Let It Be",
        artist: "The Beatles",
        year: 1967
    },
    {
        title: "The Police",
        artist: "The Police",
        year: 1980
    },
    {
        title: "OK Computer",
        artist: "Radiohead",
        year: 1999
    },
    {
        title: "Hotel California",
        artist: "The Eagles",
        year: 1976
    },
]

// const record = records.find(t => {
//     return t.title.includes("P");
// });

const beatles = records.filter(title => {
    return title.artist.includes("Beatles");
});

const words = ['wag', 'dog', 'wig', 'log', 'bag'];

const hasLetterI = words.some(word => {
    return word.includes("i");
});