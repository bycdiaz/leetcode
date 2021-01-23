// Given the root node of a binary search tree,
// return the sum of values of all nodes with a
// value in the range [low, high].

class TreeNode {
  constructor(value, left, right) {
    this.value = (value === undefined ? 0 : value);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
  }
}

function rangeSumBST(root, low, high) {
  if (!root.left && !root.right) return root.value || 0;

  let sum = 0;
  const stack = [root];

  while (stack.length > 0) {
    const currentNode = stack.pop();
    const valueWithinRange = (currentNode.value >= low) && (currentNode.value <= high);
    
    if (valueWithinRange) {
      sum += currentNode.value;
    }

    if (currentNode.left) {
      stack.push(currentNode.left);
    }

    if (currentNode.right) {
      stack.push(currentNode.right);
    }
  }

  return sum;
};

const tree = new TreeNode(10);
tree.left = new TreeNode(5);
tree.right = new TreeNode(15);
tree.left.left = new TreeNode(3);
tree.left.right = new TreeNode(7);
tree.right.right = new TreeNode(18);

console.log(rangeSumBST(tree, 7, 15));
// 32
