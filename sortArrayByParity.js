// Given an array A of non-negative integers, return an array consisting of
// all the even elements of A, followed by all the odd elements of A.

// You may return any answer array that satisfies this condition.

// Note:

// 1 <= A.length <= 5000
// 0 <= A[i] <= 5000

const isEven = number => number % 2 === 0;

// initial solution
// function sortArrayByParity(numbers) {
//   const evens = [];
//   const odds = [];

//   for (number of numbers) {
//     isEven(number) ? evens.push(number) : odds.push(number);
//   }

//   return evens.concat(odds);
// };

// with reduce
function sortArrayByParity(numbers) {
  const evenOddArrays = numbers.reduce((arrays, number) => {
    const evens = arrays[0];
    const odds = arrays[1];
    
    isEven(number) ? evens.push(number) : odds.push(number);

    return arrays;
  }, [[],[]])

  return evenOddArrays[0].concat(evenOddArrays[1]);
};

console.log(sortArrayByParity([3,1,2,4]));
// [2,4,3,1]
// [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.