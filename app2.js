//Arrays

// let shoppingList = ["cheese", "ice", "cereal"];
// shoppingList[2] = "pizza"; //replaces cereal with pizza
// shoppingList[shoppingList.length] = "tea"; // adds to end of array
// console.log(shoppingList);

// Array Methods
// let topSongs = [
//     "Help",
//     "Under Pressure",
//     "Sabotage",
//     "Back in Black"
// ];

// topSongs.push("The Stand");
// topSongs.pop();
// let lastSong = topSongs.pop();
// console.log(lastSong);

// topSongs.shift();
// topSongs.unshift("Revolution");
// topSongs.unshift("Pulling Mussels from a Shell", "Drive My Car");

// console.log(topSongs);

// CONCAT
// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];
// let newArray = (array1.concat(array2));
// console.log(newArray);

////////////////////
// includes() and indexOf()
////////////////////

// let records = [
//     "War",
//     "Abbey Road",
//     "Sticky Fingers",
//     "OK Computer",
//     "Everywhere at Once"
// ]

// let searchTerm = "War"

// if (records.includes(searchTerm)) {
//     console.log("You have this record. It's index is " + records.indexOf(searchTerm));
// } else {
//     console.log("Buy it!");
// }

////////////////////
// // reverse() and join()
////////////////////

// records.reverse();
// console.log(records);


// let joinedArray = records.join(" and ");
// console.log(joinedArray);

// let goodRecords = records.slice(0, 1);
// console.log(goodRecords);

// let nums = [0, 1, 2, 3, 4, 5];
// let deletedNums = nums.splice(2, 2, 8, 9);
// console.log(deletedNums);
// console.log(nums);

// records.splice(3, 0, "Clambake", "Evil Powers of Rock and Roll");
// console.log(records);
// records.splice(3, 1);
// console.log(records); 

////////////////////
// sort()
////////////////////

// let records = [
//     ["U2", "War"],
//     ["The Beatles", "Abbey Road"],
//     ["The Rolling Stones", "Sticky Fingers"],
//     ["Radiohead", "OK Computer"],
//     ["The Plimsouls", "Everywhere at Once"]
// ]

// // records.sort();
// // console.log(records);
// console.log(records[2][1]);
