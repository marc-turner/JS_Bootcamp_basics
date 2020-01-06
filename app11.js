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

