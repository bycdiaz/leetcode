// You are given an m x n binary matrix mat of 1's (representing soldiers) and 0's
// (representing civilians). The soldiers are positioned in front of the civilians.
// That is, all the 1's will appear to the left of all the 0's in each row.
// A row i is weaker than a row j if one of the following is true:

//     The number of soldiers in row i is less than the number of soldiers in row j.
//     Both rows have the same number of soldiers and i < j.

// Return the indices of the k weakest rows in the matrix ordered from weakest to strongest.

function countSoldiers(array) {
  return array.reduce((count, number) => {
    if (number === 1) count++;
    return count;
  }, 0)
}

function kWeakestRows(matrix, k) {
  const rowStrengths = [];

  for (let index = 0; index < matrix.length; index++) {
    rowStrengths.push({
      row: index,
      strength: countSoldiers(matrix[index])
    });
  }

  const kWeakest = rowStrengths.sort((a, b) => {
    if (a.strength === b.strength) {
      return a.row - b.row;
    } else {
      return a.strength - b.strength;
    }
  }).slice(0, k);

  return kWeakest.map(entry => {
    return entry.row
  })
};

console.log(kWeakestRows([
  [1,0,0,0],
  [1,1,1,1],
  [1,0,0,0],
  [1,0,0,0]
], 2));
// [0,2]

console.log(kWeakestRows([
  [1,1,0,0,0],
  [1,1,1,1,0],
  [1,0,0,0,0],
  [1,1,0,0,0],
  [1,1,1,1,1]
], 3));
// [2,0,3]
