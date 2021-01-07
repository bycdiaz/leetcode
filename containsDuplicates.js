// Given an array of integers, find if the array contains any duplicates.

// Your function should return true if any value appears at least twice
// in the array, and it should return false if every element is distinct.

function containsDuplicate(numbers) {
  const onlyUniqueNumbers = new Set(numbers);

  return onlyUniqueNumbers.size !== numbers.length;
};

console.log(containsDuplicate([1,2,3,1]));
// true
