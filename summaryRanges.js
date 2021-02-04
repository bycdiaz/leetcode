// You are given a sorted unique integer array nums.

// Return the smallest sorted list of ranges that
// cover all the numbers in the array exactly.

function extractRanges(array) {
  const ranges = [];
  let currentRange = [array[0]];

  for (let index = 1; index < array.length + 1; index++) {
    const currentNumber = array[index];
    const lastInCurrentRange = currentRange[currentRange.length - 1];
    
    if ((lastInCurrentRange + 1) === currentNumber) {
      currentRange.push(currentNumber);
    } else {
      ranges.push(currentRange);
      currentRange = [currentNumber];
    }
  }

  return ranges;
}

function formatRange(rangeArray) {
  if (rangeArray.length > 1) {
    return `${rangeArray[0]}->${rangeArray[rangeArray.length - 1]}`;
  } else {
    return rangeArray[0].toString();
  }
}

function summaryRanges(numbers) {
  const ranges = extractRanges(numbers);

  return ranges.reduce((resultArray, range) => {
    const formattedRange = formatRange(range);
    resultArray.push(formattedRange);

    return resultArray;
  }, []);
};

console.log(summaryRanges([0,1,2,4,5,7]));
// ["0->2","4->5","7"]
