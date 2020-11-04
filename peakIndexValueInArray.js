// Let's call an array arr a mountain if the following properties hold:

//     arr.length >= 3
//     There exists some i with 0 < i < arr.length - 1 such that:
//         arr[0] < arr[1] < ... arr[i-1] < arr[i]
//         arr[i] > arr[i+1] > ... > arr[arr.length - 1]

// Given an integer array arr that is guaranteed to be a mountain, return any i such that arr[0] < arr[1] < ... arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1].

// Constraints:

//     3 <= arr.length <= 104
//     0 <= arr[i] <= 106
//     arr is guaranteed to be a mountain array.

// initial solution
function peakIndexInMountainArray(array) {
  const greatest = {
    number: 0,
    index: null,
  };

  array.forEach((number, index) => {
    if (number > greatest.number) {
      greatest.number = number;
      greatest.index = index;
    }
  })

  return greatest.index;
};

console.log(peakIndexInMountainArray([24,69,100,99,79,78,67,36,26,19]));
// 2

// console.log(peakIndexInMountainArray([3,4,5,1]));
// 2

// console.log(peakIndexInMountainArray([0,10,5,2]));
// 1

// console.log(peakIndexInMountainArray([0,1,0]));
// 1

// console.log(peakIndexInMountainArray([0,2,1,0]));
// 1
