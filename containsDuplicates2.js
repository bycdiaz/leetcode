// Given an array of integers and an integer k, find out whether
// there are two distinct indices i and j in the array such that
// nums[i] = nums[j] and the absolute difference between i and j
// is at most k.

function containsNearbyDuplicate(nums, k) {
  const map = new Map();

  for (let index = 0; index < nums.length; index++){
    let current = nums[index];
    const differenceWithinRange = Math.abs(map.get(current) - index) <= k;

    if(map.has(current) && differenceWithinRange){
      return true;
    } else{
      map.set(current, index);
    }
  }

  return false;
};

console.log(containsNearbyDuplicate([1,2,3,1], 3));
// true
