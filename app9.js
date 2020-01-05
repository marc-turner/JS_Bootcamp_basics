// reduce()

// const nums = [2, 3, 4, 5, 6, 7];

// const sum = nums.reduce((a, b) => a + b);

// const product = nums.reduce((a, b) => a * b);

// let grades = [90, 65, 23, 85, 56, 76];

// const topGrade = grades.reduce((max, currVal) => {
//     if (currVal > max) return currVal;
//     return max;
// });

// const lowGrade = grades.reduce((min, currVal) => {
//     return Math.min(min, currVal);
// });

// const sumWithInitial = nums.reduce((a, b) => {
//     return a + b;
// }, 100);

// const votes = ['y', 'y', 'n', 'y', 'n', 'n', 'y', 'n', 'y', 'n', 'y', 'n', 'n', 'y'];

// const results = votes.reduce((tally, val) => {
//     if (tally[val]) {
//         tally[val]++
//     } else {
//         tally[val] = 1;
//     }
//     return tally;
// }, {});

const records = [
    {
        title: "Revolver",
        artist: "The Beatles",
        year: 1966,
        rating: 8
    },
    {
        title: "Hotel California",
        artist: "The Eagles",
        year: 1976,
        rating: 8
    },
    {
        title: "Stick Fingers",
        artist: "The Rolling Stones",
        year: 1972,
        rating: 7
    },
    {
        title: "OK Computer",
        artist: "Radiohead",
        year: 1999,
        rating: 9
    },
    {
        title: "Duty Now For The Future",
        artist: "Devo",
        year: 1980,
        rating: 10
    },
]

const arrangedLps = records.reduce((groupedLPs, record) => {
    const key = record.rating;
    if (!groupedLPs[key]) groupedLPs[key] = [];
    groupedLPs[key].push(record)
    return groupedLPs;
}, {});