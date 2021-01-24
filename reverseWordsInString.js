// Given a string, you need to reverse the order of characters ineach word
// within a sentence while still preserving whitespace and initial word order.

// Example 1:

// Input: "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"

// Note: In the string, each word is separated by single space and there
// will not be any extra space in the string.

function reverseWords(string) {
  const resultString = [];

  string.split(' ').forEach(word => {
    const reversedWord = [];
    let leftIndex = 0;
    let rightIndex = word.length - 1;
    
    while (leftIndex <= rightIndex) {
      const temp = word[leftIndex];
      reversedWord[leftIndex] = word[rightIndex];
      reversedWord[rightIndex] = temp;
      
      leftIndex++;
      rightIndex--;
    }

    resultString.push(reversedWord.join(''));
  })

  return resultString.join(' ');
};

console.log(reverseWords("Let's take LeetCode contest"));
// "s'teL ekat edoCteeL tsetnoc"
