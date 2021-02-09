// Write a program that outputs the string representation
// of numbers from 1 to n.

// But for multiples of three it should output “Fizz”
// instead of the number and for the multiples of five
// output “Buzz”. For numbers which are multiples of both
// three and five output “FizzBuzz”.

function fizzBuzz (n) {
  const result = [];
  for (let currentNumber = 1; currentNumber < n + 1; currentNumber++) {
    const multipleOfThree = currentNumber % 3 === 0;
    const multipleOfFive = currentNumber % 5 === 0;
    
    if (multipleOfThree && multipleOfFive) {
      result.push('FizzBuzz')
    } else if (multipleOfFive) {
      result.push('Buzz')
    } else if (multipleOfThree) {
      result.push('Fizz')
    } else {
      result.push(`${currentNumber}`)
    }
  }

  return result;
};

console.log(fizzBuzz(15));
