// You're given strings J representing the types of stones that are jewels,
// and S representing the stones you have.  Each character in S is a type
// of stone you have.  You want to know how many of the stones you have are
// also jewels.

// The letters in J are guaranteed distinct, and all characters in J and S
// are letters. Letters are case sensitive, so "a" is considered a different
// type of stone from "A".

// Note:

// S and J will consist of letters and have length at most 50.
// The characters in J are distinct.

function numJewelsInStones(jewels, stones) {
  return stones.split('').reduce((jewelsFound, stone) => {
    if (jewels.includes(stone)) jewelsFound++;

    return jewelsFound;
  }, 0)
}

console.log(numJewelsInStones("aA", "aAAbbbb"));
// 3

console.log(numJewelsInStones("z", "ZZ"));
// 0
