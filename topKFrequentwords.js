// Given a non-empty list of words, return the k most frequent elements.

// Your answer should be sorted by frequency from highest to lowest. If
// two words have the same frequency, then the word with the lower
// alphabetical order comes first.

function topKFrequent(words, k) {
  const wordCount = {};

  for (word of words) {
    if (wordCount[word]) {
      wordCount[word] += 1;
    } else {
      wordCount[word] = 1;
    }
  }

  const topKthWords = Object.entries(wordCount).sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] < b[0] ? -1 : 1;
    } else {
      return a[1] > b[1] ? -1 : 1;
    }
  }).slice(0, k);

  return topKthWords.map(wordAndCount => wordAndCount[0]);
};

console.log(topKFrequent(["i", "love", "leetcode", "i", "love", "coding"], 3));
// ["i","love","coding"]

// console.log(topKFrequent(["i", "love", "leetcode", "i", "love", "coding"], 2));
// ["i", "love"]

console.log(topKFrequent(["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], 4));
// ["the", "is", "sunny", "day"]
