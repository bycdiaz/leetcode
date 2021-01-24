function replaceElements(arr) {
  return arr.map((_, index, array) => {
    const atLastIndex = index === array.length - 1;
    const greatestAfterCurrent = Math.max(...array.slice(index + 1));

    return atLastIndex ? -1 : greatestAfterCurrent;
  });
};

console.log(replaceElements([17,18,5,4,6,1]));
// [18,6,6,6,1,-1]
