// We are given two sentences A and B.  (A sentence is a string of space separated words.
// Each word consists only of lowercase letters.)

// A word is uncommon if it appears exactly once in one of the sentences, and does not
// appear in the other sentence.

// Return a list of all uncommon words. 

// You may return the list in any order.

function countWordsInString(wordsArray) {
  return wordsArray.reduce((count, word) => {
    if (count[word]) {
      count[word]++;
    } else {
      count[word] = 1;
    }

    return count;
  }, {})
}

function uncommonFromSentences(A, B) {
  const aAsArray = A.split(' ');
  const bAsArray = B.split(' ');
  const aCount = countWordsInString(aAsArray);
  const bCount = countWordsInString(bAsArray);
  const stringWithMostWords = Math.max(aAsArray.length, bAsArray.length);
  const uncommonWords = [];
  
  for (let index = 0; index < stringWithMostWords; index++) {
    const currentWordA = aAsArray[index];
    const currentWordB = bAsArray[index];

    if (aCount[currentWordA] === 1 && !bAsArray.includes(currentWordA)) {
      uncommonWords.push(currentWordA);
    }

    if (bCount[currentWordB] === 1 && !aAsArray.includes(currentWordB)) {
      uncommonWords.push(currentWordB);
    }
  }

  return uncommonWords;
};

console.log(uncommonFromSentences("this apple is sweet", "this apple is sour"));
// ["sweet","sour"]