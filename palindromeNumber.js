// Determine whether an integer is a palindrome. An integer is a palindrome when
// it reads the same backward as forward.

// Example 1:

// Input: 121
// Output: true

// Example 2:

// Input: -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes
// 121-. Therefore it is not a palindrome.

function isPalindrome(x) {
  if (x < 0) return false;

  const digits = x.toString().split('');
  let leftIndex = 0;
  let rightIndex = digits.length - 1;
  let isPalindrome = true;

  while (leftIndex <= rightIndex) {
    if (digits[leftIndex] !== digits[rightIndex]) return false;

    leftIndex++;
    rightIndex--;
  }

  return isPalindrome;
};

console.log(isPalindrome(100));