// Given two strings s and t , write a function to determine if t is an anagram of s.

// initial solution
// function isAnagram(s, t) {
//   return s.split("").sort().join() === t.split("").sort().join();
// };

function countCharacters(string) {
  return string.split("").reduce((count, character) => {
    if (count[character]) {
      count[character]++;
    } else {
      count[character] = 1;
    }

    return count;
  }, {});
};

function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  const sCountsAsArray = Object.entries(countCharacters(s));
  const tCount = countCharacters(t);

  for (let index = 0; index < sCountsAsArray.length; index++) {
    const [character, count] = sCountsAsArray[index];

    if (tCount[character] !== count) {
      return false;
    }
  }
  
  return true;
};

console.log(isAnagram("anagram", "nagaram"));
// true
