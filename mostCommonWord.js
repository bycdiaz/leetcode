// Given a paragraph and a list of banned words, return the
// most frequent word that is not in the list of banned words.
// It is guaranteed there is at least one word that isn't banned,
// and that the answer is unique.

// Words in the list of banned words are given in lowercase, and
// free of punctuation.  Words in the paragraph are not case
// sensitive.  The answer is in lowercase.

function mostCommonWord(paragraph, banned) {
  const paragraphWords = paragraph.toLowerCase().replace(/[^A-z]/g, ' ').split(' ');
  const wordCount = {};
  
  for (word of paragraphWords) {
    if (!banned.includes(word) && word !== '') {
      wordCount[word] ? wordCount[word] += 1 : wordCount[word] = 1;
    }
  }

  return Object.entries(wordCount).sort((a, b) => b[1] - a[1])[0][0];
};

console.log(mostCommonWord("a, a, a, a, b,b,b,c, c", ["a"]));
// "b"

console.log(mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.", ["hit"]));
// "ball"
