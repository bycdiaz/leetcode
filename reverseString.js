// Write a function that reverses a string. The input string is given as an
// array of characters char[].

// Do not allocate extra space for another array, you must do this by
// modifying the input array in-place with O(1) extra memory.

// You may assume all the characters consist of printable ascii characters.

function reverseString(s) {
  let leftIndex = 0;
  let rightIndex = s.length - 1;
  
  while (leftIndex < rightIndex) {
    const temp = s[leftIndex];
    s[leftIndex] = s[rightIndex];
    s[rightIndex] = temp;

    leftIndex++;
    rightIndex--;
  }

  return s;
};

console.log(reverseString(["h","e","l","l","o"]));
// ["o","l","l","e","h"]
