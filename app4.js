////////////////////
//  FOR loop


// for (let i = 0; i <= 10; i++) {
//     console.log("this is " + i);
// }

// for (let i = 1; i <= 20; i++) {
//     console.log(i, + " " + i * i);
// }

// for (let i = 200; i >= 0; i -= 25) {
//     console.log(i);
// }

////////////////////
// For loops and arrays

// let records = ["Sgt Pepper", "Exile on Main St", "OK Computer", "Boston", "Never Mind the Bullocks"];

// for (let i = 0; i < records.length; i++) {
//     console.log(i, records[i]);
// }
// for (let i = 0; i < records.length; i++) {
//     records.reverse();
//     console.log(i, records[i]);
// }

// const recordCollection = [
//     {
//         artist: "The Beatles",
//         title: "Revolver"
//     },
//     {
//         artist: "The Rolling Stones",
//         title: "Sticky Fingers"
//     },
//     {
//         artist: "Radiohead",
//         title: "OK Computer"
//     },
//     {
//         artist: "The Alarm",
//         title: "The Stand"
//     }
// ]

// for (let i = 0; i < recordCollection.length; i++) {
//     let collection = recordCollection[i];
//     console.log(`${collection.artist}: ${collection.title}`);
// }

// const word = 'stressed';
// let reversedWord = "";
// for (let i = word.length - 1; i >= 0; i--) {
//     reversedWord += word[i];
// }
// console.log(reversedWord);

// const students = [
//     {
//         name: "Nick",
//         grade: 86
//     },
//     {
//         name: "Jill",
//         grade: 95
//     },
//     {
//         name: "James",
//         grade: 85
//     },
//     {
//         name: "Davion",
//         grade: 99
//     },
// ]

// let total = 0;

// for (let i = 0; i < students.length; i++) {
//     let student = students[i];
//     total += student.grade;
// };
// console.log(`The class average is ${total / students.length}`);