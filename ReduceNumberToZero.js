// Given a non-negative integer num, return the number of
// steps to reduce it to zero. If the current number is
// even, you have to divide it by 2, otherwise, you have
// to subtract 1 from it.

function numberOfSteps(num) {
  let current = num;
  let steps = 0;

  while (current !== 0) {
    const currentIsEven = current % 2 === 0;

    if (currentIsEven) {
      current = current / 2;
    } else {
      current = current - 1;
    }

    steps++;
  }

  return steps;
};

console.log(numberOfSteps(14));;
// 6
