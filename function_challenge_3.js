// A pangram is a sentence that contains every letter of the alphabet, like:
//"The quick brown fox jumps over the lazy dog"

// Write a function called isPangram, which checks to see if a given sentence contains every letter of the alphabet.  Make sure you igore string casing!

// isPangram('The five boxing wizards jump quickly') //true
// isPangram('The five boxing wizards jump quick') //false

function isPangram(str) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let fixedStr = str.toLowerCase().split(' ').join('');
    // console.log(fixedStr);

    for (let i = 0; i < alphabet.length; i++) {
        if (!fixedStr.includes(alphabet[i])) {
            return false;
        }
    }
    return true;

    // let lowerCased = str.toLowerCase();
    // for (let char in 'abcdefghijklmnopqrstuvwxyz') {
    //     if (!lowerCased.includes(char)) {
    //         return false;
    //     }
    // }
    // return true;
}