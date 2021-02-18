// You are given an m x n integer grid accounts where accounts[i][j] is the
// amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth
// that the richest customer has.

// A customer's wealth is the amount of money they have in all their bank
// accounts. The richest customer is the customer that has the maximum wealth.

function sumAccount(accounts) {
  return accounts.reduce((sum, account) => sum += account, 0);
}

function maximumWealth(customers) {
  let wealthiest = 0;

  for (const accounts of customers) {
    const wealth = sumAccount(accounts);
    
    if (wealth > wealthiest) {
      wealthiest = wealth;
    }

  }

  return wealthiest;
};

console.log(maximumWealth([[1,2,3],[3,2,1]]));
// 6

console.log(maximumWealth([[1,5],[7,3],[3,5]]));
// 10
