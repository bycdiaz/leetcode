// Given a string s and an integer array indices of the same length.

// The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.

// Return the shuffled string.

// Example 1:

// Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
// Output: "leetcode"
// Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.

// Example 2:

// Input: s = "abc", indices = [0,1,2]
// Output: "abc"
// Explanation: After shuffling, each character remains in its position.

// Example 3:

// Input: s = "aiohn", indices = [3,1,4,2,0]
// Output: "nihao"

// Example 4:

// Input: s = "aaiougrt", indices = [4,0,2,6,7,3,1,5]
// Output: "arigatou"

// Example 5:

// Input: s = "art", indices = [1,0,2]
// Output: "rat"

// initial approach
function restoreString(string, indices) {
  const letterAndIndexes = [];

  for (let index = 0; index < indices.length; index++) {
    letterAndIndexes.push({
      letter: string.charAt(index),
      index: indices[index]
    });
  }

  const sortedLetterAndIndexes = letterAndIndexes.sort((a, b) => a.index - b.index);

  return sortedLetterAndIndexes.reduce((string, object) => {
    string += object.letter;

    return string;
  }, '')
};

console.log(restoreString("art", [1,0,2]));