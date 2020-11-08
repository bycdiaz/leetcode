// Given two arrays of integers nums and index. Your task is to create target array
// under the following rules:

// Initially target array is empty.
// From left to right read nums[i] and index[i], insert at index index[i] the value
// nums[i] in target array.
// Repeat the previous step until there are no elements to read in nums and index.

// Return the target array.

// It is guaranteed that the insertion operations will be valid.

// initial solution
// function createTargetArray(numbers, indices) {
//   const targetArray = [];

//   for (let index = 0; index < numbers.length; index++) {
//     const currentNumber = numbers[index];
//     const currentIndex = indices[index];

//     targetArray.splice(currentIndex, 0, currentNumber);
//   }

//   return targetArray;
// }

// with reduce
function createTargetArray(numbers, indices) {
  return numbers.reduce((targetArray, number, index) => {
    targetArray.splice(indices[index], 0, number);

    return targetArray;
  }, [])
}

console.log(createTargetArray([0,1,2,3,4], [0,1,2,2,1]));
// [0,4,1,3,2]

console.log(createTargetArray([1,2,3,4,0], [0,1,2,3,0]));
// [0,1,2,3,4]
