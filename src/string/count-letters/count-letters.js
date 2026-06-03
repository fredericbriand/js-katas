/*
Create a function `countChar` which counts, in a given string, the number of times a character appears.

If the string or the character is null, return -1.
If the character length is other than 1, return -1.

Example:
* "" and "a" -> 0
* "a" and "a" -> 1
* "aaaaabbbaa" and "a" -> 7
* "bbacbaaa" and "c" -> 1
* "bbcc" and "a" -> 0
* null and "a" -> -1

Add you own tests.

*/

function countChar (string, character) {
    if (!string || !character || character.length > 1) {
        return "-1";
    }
    let stringLetters = string.split('');
    let sameLetters = 0;
    for (let i = 0; i < stringLetters.length; i++) {
        if (stringLetters[i] === character) {
            sameLetters += 1;
        }
    }
    return sameLetters;
}

module.exports = countChar;
