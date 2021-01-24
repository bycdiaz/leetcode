// Given a 32-bit signed integer, reverse digits of an integer.

// Example 1:

// Input: 123
// Output: 321

// Example 2:

// Input: -123
// Output: -321

// Example 3:

// Input: 120
// Output: 21

// Note:
// Assume we are dealing with an environment which could only
// store integers within the 32-bit signed integer range:
// [−231,  231 − 1]. For the purpose of this problem, assume
// that your function returns 0 when the reversed integer
// overflows.

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const negativeInput = x.toString()[0] === '-' ? true : false;
  let digits = '';
  if (negativeInput) {
    digits = x.toString().slice(1).split('')
  } else {
    digits = x.toString().split('');
  }

  let leftIndex = 0;
  let rightIndex = digits.length - 1

  while (leftIndex < rightIndex) {
    console.log(digits);
    const tempValue = digits[leftIndex];
    digits[leftIndex] = digits[rightIndex];
    digits[rightIndex] = tempValue;

    leftIndex++;
    rightIndex--;
  }
  if (negativeInput) {
    return `-${Number(digits.join(""))}`;
  }else {
    return Number(digits.join(""));
  }
}

console.log(reverse(-123));

// console.log(reverse(123));