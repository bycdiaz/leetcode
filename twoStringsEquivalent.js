// Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

// A string is represented by an array if the array elements concatenated in order forms the string.

function arrayStringsAreEqual(word1, word2) {
  return word1.join('') === word2.join('');
};

console.log(arrayStringsAreEqual(["ab", "c"], ["a", "bc"]));
// true

console.log(arrayStringsAreEqual(["a", "cb"], ["ab", "c"]));
// false
