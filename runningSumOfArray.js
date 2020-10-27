// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

// Example 2:

// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].

// Example 3:

// Input: nums = [3,1,2,10,1]
// Output: [3,4,6,16,17]

// Constraints:

// 1 <= nums.length <= 1000
// -10^6 <= nums[i] <= 10^6

// initial approach
function runningSum(numbers) {
  const sums = [numbers[0]];

  for (let index = 1; index < numbers.length; index++) {
    const lastSum = sums[sums.length -1];
    const currentNumber = numbers[index];

    sums.push(lastSum + currentNumber);
  }

  return sums;
};

console.log(runningSum([1,2,3,4]));
// [1,3,6,10]