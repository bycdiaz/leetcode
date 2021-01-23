// Given a m x n matrix grid which is sorted in non-increasing order
// both row-wise and column-wise, return the number of negative
// numbers in grid.

function countNegatives(grid) {
  return grid.reduce((totalNegatives, array) => {
    array.forEach(number => {
      if (number < 0) totalNegatives++;
    })

    return totalNegatives;
  }, 0)
};

console.log(countNegatives([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]));
// 8
