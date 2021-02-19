// Given an integer number n, return the difference between the product of
// its digits and the sum of its digits. 

function numberToDigitsArray(number) {
  return number.toString().split('').map(character => {
    return Number(character);
  })
}

function getProduct(digits) {
  return digits.reduce((product, digit) => {
    return product *= digit; 
  })
}

function getSum(digits) {
  return digits.reduce((product, digit) => {
    return product += digit; 
  })
}

function subtractProductAndSum(n) {
  const digitsArray = numberToDigitsArray(n);
  const product = getProduct(digitsArray);
  const sum = getSum(digitsArray);

  return product - sum;
};

console.log(subtractProductAndSum(234));
