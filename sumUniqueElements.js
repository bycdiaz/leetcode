// You are given an integer array nums. The unique
// elements of an array are the elements that
// appear exactly once in the array.

// Return the sum of all the unique elements of nums.

function countOccurances(numbersArray) {
  return numbersArray.reduce((count, digit) => {
    if (count[digit]) {
      count[digit]++;
    } else {
      count[digit] = 1;
    }

    return count;
  }, {})
}

function sumOfUnique(nums) {
  const digitsCount = countOccurances(nums);
  const uniqueNumbers = Object.entries(digitsCount).reduce((unique, entry) => {
    const [key, value] = entry;
    if (value === 1) {
      unique.push(Number(key));
    }

    return unique;
  }, [])
  
  if (uniqueNumbers.length === 1) {
    return 0;
  } else {
    return uniqueNumbers.reduce((sum, number) => {
      return sum += number;
    }, 0);
  }
};

console.log(sumOfUnique([1,2,3,4,5]));
// 15

console.log(sumOfUnique([1,1,1,1,1]));
// 0

console.log(sumOfUnique([1,2,3,2]));
// // 4