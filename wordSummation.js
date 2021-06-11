/*
You are given three strings firstWord, secondWord, and targetWord, each
consisting of lowercase English letters 'a' through 'j' inclusive.

Return true if the summation of the numerical values of firstWord and
secondWord equals the numerical value of targetWord, or false otherwise.
*/

const alphabet = [
  'a', 'b', 'c', 'd', 'e', 'f',
  'g', 'h', 'i', 'j', 'k', 'l',
  'm', 'n', 'o', 'p', 'q', 'r',
  's', 't', 'u', 'v', 'w', 'x',
  'y', 'z'
];

function getWordValue(string) {
  return string.split('').reduce((value, character) => {
    return value += alphabet.indexOf(character);
  }, '')
}

function isSumEqual(firstWord, secondWord, targetWord) {
  const wordValues = [];

  for (const word in arguments) {
    const wordValue = Number(getWordValue(arguments[word]));
    wordValues.push(wordValue);
  }

  return wordValues[0] + wordValues[1] === wordValues[wordValues.length - 1];
};

console.log(isSumEqual("acb", "cba", "cdb"));
// true
