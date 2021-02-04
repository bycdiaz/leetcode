// Given a non-negative integer num, repeatedly add all its
// digits until the result has only one digit.

function addDigits(num) {
  const numAsString = num.toString();
  let currentNumber = numAsString;

  while (currentNumber.length >= 2) {
    currentNumber = currentNumber.split('').reduce((sum, numberAsString) => {
      return sum + Number(numberAsString);
    }, 0).toString();
  }

  return currentNumber;
};

console.log(addDigits(38));
// 2
