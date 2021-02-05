// A binary tree is univalued if every node in the tree has the same value.

// Return true if and only if the given tree is univalued.

function countValues(array) {
  return array.reduce((count, currentValue) => {
    if (count[currentValue]) {
      count[currentValue]++;
    } else {
      count[currentValue] = 1;
    }

    return count;
  }, {})
}

function isUnivalTree(root) {
  if (!root.left && !root.right) {
    return true;
  }

  const nodeStack = [root];
  const allNodeValues = [];

  while (nodeStack.length) {
    const currentNode = nodeStack.pop();

    allNodeValues.push(currentNode.val);

    if (currentNode.left) {
      nodeStack.push(currentNode.left);
    }

    if (currentNode.right) {
      nodeStack.push(currentNode.right);
    }
  }

  const nodeValuesCount = countValues(allNodeValues);
  return Object.keys(nodeValuesCount).length === 1;
};

class TreeNode {
  constructor(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (val === undefined ? null : left);
    this.right = (val === undefined ? null : right);
  } 
}

const root = new TreeNode(1, new TreeNode(1, new TreeNode(1), new TreeNode(1)), new TreeNode(1, null, new TreeNode(1, null, new TreeNode(1))));

console.log(isUnivalTree(root));
