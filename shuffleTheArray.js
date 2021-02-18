// Given the array nums consisting of 2n elements in
// the form [x1,x2,...,xn,y1,y2,...,yn].

// Return the array in the form [x1,y1,x2,y2,...,xn,yn].

// initial solution
// function shuffle(nums, n) {
//   const leftNums = nums.slice(0, n);
//   const rightNums = nums.slice(n);
//   const shuffledArray = [];
//   let index = 0;

//   while (index < n) {
//     shuffledArray.push(leftNums[index], rightNums[index]);

//     index++;
//   }

//   return shuffledArray;
// };

// 2nd approach
function shuffle(nums, n) {
  const shuffledArray = [];
  let leftIndex = 0;
  let rightIndex = n;

  while (leftIndex < n) {
    shuffledArray.push(nums[leftIndex], nums[rightIndex]);

    leftIndex++;
    rightIndex++;
  }

  return shuffledArray;
};

console.log(shuffle([1,2,3,4,4,3,2,1], 4));
// [1,4,2,3,3,2,4,1]

// console.log(shuffle([2,5,1,3,4,7], 3));
// // [2,3,5,4,1,7]
