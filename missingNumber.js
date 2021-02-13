// Given an array nums containing n distinct numbers in the range
// [0, n], return the only number in the range that is missing
// from the array.

// initial solution
function missingNumber(nums) {
  for (let number = 0; number < nums.length; number++) {
    const numberNotFound = !nums.includes(number);
    
    if (numberNotFound) {
      return number;
    }
  }

  return Math.max(...nums) + 1;
};

console.log(missingNumber([3,0,1]));
// 2