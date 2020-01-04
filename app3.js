// const records = {

// };
// records['The Beatles'] = "Abbey Road";
// records.U2 = "War";

// console.log(records);
// records.U2 = "Boy";
// console.log(records);

const album = {
    artist: "The Beatles",
    title: "Abbey Road",
    year: 1968,
    producer: ["George Martin", "Jeff Emmerick"],
    label: "Apple",
    members: {
        leadGuitar: "George Harrison",
        bass: "Paul McCartney",
        guitar: "John Lennon",
        drums: "Ringo Starr"
    }
}

console.log(album.members.leadGuitar);
let yearsAgo = 2020 - album.year;
console.log(album.title + " was made " + yearsAgo + " years ago ");
console.log(`${album.title} was a record by ${album.artist} and was produced by ${album.producer[0]}`);

const beatlesRecords = [
    {
        title: "Sgt Pepper's Lonely Hearts Club Band",
        year: 1967
    },
    {
        title: "Abbey Road",
        year: 1968
    },
    {
        title: "Let It Be",
        year: 1969
    }
];

console.log(beatlesRecords[0].title + " " + beatlesRecords[0].year);
