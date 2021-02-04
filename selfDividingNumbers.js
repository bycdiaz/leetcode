// A self-dividing number is a number that is divisible by every digit it contains.

// For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0,
// and 128 % 8 == 0.

// Also, a self-dividing number is not allowed to contain the digit zero.

// Given a lower and upper number bound, output a list of every possible self
// dividing number, including the bounds if possible.

function numberSelfDivides(number) {
  const digitsArray = number.toString().split('').map(character => {
    return Number(character);
  });

  if (digitsArray.includes('0')) {
    return false;
  }

  for (let index = 0; index < digitsArray.length; index++) {
    const currentNumber = digitsArray[index];
    const notDivisibleByDigit = number % currentNumber !== 0;

    if (notDivisibleByDigit) {
      return false;
    }
  }

  return true;
}

function selfDividingNumbers(left, right) {
  const selfDividing = [];

  for (let currentNumber = left; currentNumber < right + 1; currentNumber++) {
    if (numberSelfDivides(currentNumber)) {
      selfDividing.push(currentNumber);
    }
  }

  return selfDividing;
};

console.log(selfDividingNumbers(1, 22));
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]
