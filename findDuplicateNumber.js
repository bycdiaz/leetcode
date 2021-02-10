// Given an array of integers nums containing n + 1 integers where each
// integer is in the range [1, n] inclusive.

// There is only one repeated number in nums, return this repeated
// number.

// Example 1:

// Input: nums = [1,3,4,2,2]
// Output: 2

function findDuplicate(nums) {
  const numbersSeen = new Set();

  for (const number of nums) {
    if (numbersSeen.has(number)) {
      return number;
    } else {
      numbersSeen.add(number);
    }
  }
};

console.log(findDuplicate([1,3,4,2,2]));
// 2