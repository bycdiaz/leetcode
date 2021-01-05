// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// Follow up: Could you implement a solution with a linear runtime complexity and without using extra memory?

function singleNumber(numbers) {
  for (let index = 0; index < numbers.length; index++) {
    const currentNumber = numbers[index];
    const beforeCurrent = numbers.slice(0, index);
    const afterCurrent = numbers.slice(index + 1);
    
    if (!beforeCurrent.includes(currentNumber) && !afterCurrent.includes(currentNumber)) {
      return currentNumber;
    }
  }
};

console.log(singleNumber([2,2,1]));
// 1

console.log(singleNumber([4,1,2,1,2]));
// 4

console.log(singleNumber([1]));
// 1
