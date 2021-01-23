// Given the array nums, for each nums[i] find out how many numbers
// in the array are smaller than it. That is, for each nums[i] you
// have to count the number of valid j's such that j != i and
// nums[j] < nums[i].

// Return the answer in an array.

function smallerNumbersThanCurrent(numbers) {
  const smallerNumbers = [];

  // create copy of numbers
  const numbersCopy = JSON.parse(JSON.stringify(numbers));
  const sortedNumbers = numbersCopy.sort((a, b) => a - b);

  for (let index = 0; index < numbers.length; index++) {
    const currentNumber = numbers[index];
    const placeInSorted = sortedNumbers.indexOf(currentNumber);

    smallerNumbers.push(placeInSorted)
  }

  return smallerNumbers;
}

console.log(smallerNumbersThanCurrent([7,7,7,7]));
// [0,0,0,0]

console.log(smallerNumbersThanCurrent([6,5,4,8]));
// [2,1,0,3]

console.log(smallerNumbersThanCurrent([8,1,2,2,3]));
// [4,0,1,1,3]