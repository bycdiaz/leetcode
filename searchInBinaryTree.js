// You are given the root of a binary search tree (BST) and an integer val.

// Find the node in the BST that the node's value equals val and return
// the subtree rooted with that node. If such a node does not exist, return
// null.

class TreeNode {
  constructor(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

function searchBST(root, val) {
  const nodeStack = [root];
  
  while (nodeStack.length) {
    const currentNode = nodeStack.pop();
    
    if (currentNode.val === val) {
      return currentNode;
    }

    if (currentNode.left) {
      nodeStack.push(currentNode.left)
    }

    if (currentNode.right) {
      nodeStack.push(currentNode.right)
    }
  }

  return null;
};

const sampleTree = new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(7))
console.log(searchBST(sampleTree, 2));
//     2
//    / \
//   1   3