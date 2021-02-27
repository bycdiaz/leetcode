// Given an array of string words. Return all strings in words which is
// substring of another word in any order.

function stringMatching(words) {
  const substrings = [];

  for (let i = 0; i < words.length; i++) {
    const outerWord = words[i];
    
    for (let j = 0; j < words.length; j++) {
      const innerWord = words[j];
      
      if (i !== j) {
        const firstInstanceOfSubstring = innerWord.includes(outerWord) &&
        !substrings.includes(outerWord);
        
        if (firstInstanceOfSubstring) {
          substrings.push(outerWord);
        }
      }
    }
  }

  return substrings;
};

console.log(stringMatching(["mass","as","hero","superhero"]));
// ["as","hero"]
