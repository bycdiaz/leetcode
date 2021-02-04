// You are given a string s of even length. Split this string
// into two halves of equal lengths, and let a be the first
// half and b be the second half.

// Two strings are alike if they have the same number of
// vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U').
// Notice that s contains uppercase and lowercase letters.

// Return true if a and b are alike. Otherwise, return false.

const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

function countVowels(string) {
  return string.split('').reduce((count, letter) => {
    if (vowels.includes(letter)) {
      count++;
    } 

    return count;
  },0)
}

function halvesAreAlike(s) {
  const halfOfStringLength = Math.floor(s.length / 2);
  const firstHalf = s.slice(0, halfOfStringLength);
  const secondHalf = s.slice(halfOfStringLength);

  return countVowels(firstHalf) === countVowels(secondHalf);
};

console.log(halvesAreAlike("book"));
// true
