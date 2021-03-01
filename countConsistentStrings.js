// You are given a string allowed consisting of distinct characters
// and an array of strings words. A string is consistent if all
// characters in the string appear in the string allowed.

// Return the number of consistent strings in the array words.

function countConsistentStrings(allowed, words) {
  let count = 0;

  for (let index = 0; index < words.length; index++) {
    const uniqueLetters = [...new Set(words[index])];
    const allFound = uniqueLetters.every(letter => allowed.includes(letter));

    if (allFound) count++;
  }

  return count;
};

console.log(countConsistentStrings("abc", ["a","b","c","ab","ac","bc","abc"]));
// 7

console.log(countConsistentStrings("ab", ["ad","bd","aaab","baa","badab"]));
// 2
