// Given an array of integers arr, a lucky integer is an integer which has
// a frequency in the array equal to its value.

// Return a lucky integer in the array. If there are multiple lucky
// integers return the largest of them. If there is no lucky integer return -1.

function countElements(array) {
  return array.reduce((count, element) => {
    if (count[element]) {
      count[element]++;
    } else {
      count[element] = 1;
    }

    return count;
  }, {})
}

function findLucky (arr) {
  const countNumbers = countElements(arr);
  const luckyNumbers = Object.entries(countNumbers).filter(([key, value]) => {
    return key == value;
  })

  if (luckyNumbers.length) {
    return luckyNumbers.reduce((largestLucky,[_, value]) => {
      if (value > largestLucky) {
        largestLucky = value;
      }
  
      return largestLucky;
    }, 0)
  } else {
    return -1;
  }
};

console.log(findLucky([2,2,2,3,3]));
// -1

// console.log(findLucky([1,2,2,3,3,3]));
// 3

// console.log(findLucky([2,2,3,4]));
// 2