// Given an array nums of integers, return how many of them contain an even number of digits. 

// initial solution
// function findNumbers(numbers) {
//   let numbersWithEvenDigits = 0;

//   for (number of numbers) {
//     const numberOfDigits = number.toString().length;
//     const evenNumberOfDigits = numberOfDigits % 2 === 0;
    
//     if (evenNumberOfDigits) {
//       numbersWithEvenDigits++;
//     }
//   }

//   return numbersWithEvenDigits;
// };

// Using reduce
function findNumbers(numbers) {
  return numbers.reduce((numbersWithEvenDigits, currentNumber) => {
    const numberOfDigits = currentNumber.toString().length;
    const evenNumberOfDigits = numberOfDigits % 2 === 0;

    if (evenNumberOfDigits) {
      numbersWithEvenDigits++;
    }

    return numbersWithEvenDigits;
  }, 0)
};

console.log(findNumbers([12,345,2,6,7896]));
// 2
