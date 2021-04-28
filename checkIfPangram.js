/*
A pangram is a sentence where every letter of the English
alphabet appears at least once.

Given a string sentence containing only lowercase English
letters, return true if sentence is a pangram, or false otherwise.
*/



// initial solution
// const alphabet = [
//   'a', 'b', 'c', 'd', 'e', 'f',
//   'g', 'h', 'i', 'j', 'k', 'l',
//   'm', 'n', 'o', 'p', 'q', 'r',
//   's', 't', 'u', 'v', 'w', 'x',
//   'y', 'z'
// ]

// function checkIfPangram(sentence) {
//   return alphabet.every(letter => sentence.includes(letter));
// };

// alternative with set
// function getUniqueLetters(string) {
//   return new Set(string);
// }

// function checkIfPangram(sentence) {
//   const lettersInAlphabet = 26;
//   const uniqueLetters = getUniqueLetters(sentence);

//   return uniqueLetters.size === lettersInAlphabet;
// };

// alternative with object
function getUniqueLetters(string) {
  return string.split('').reduce((uniqueLetters, letter) => {
    uniqueLetters[letter] = 1

    return uniqueLetters;
  }, {})
}

function checkIfPangram(sentence) {
  const lettersInAlphabet = 26;
  const uniqueLetters = getUniqueLetters(sentence);

  return Object.entries(uniqueLetters).length === lettersInAlphabet;
};

console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog"));
// true

console.log(checkIfPangram("leetcode"));
// false
