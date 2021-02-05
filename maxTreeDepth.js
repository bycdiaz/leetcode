// Given the root of a binary tree, return its maximum depth.

class TreeNode {
  constructor(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

const sampleRoot = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));

function maxDepth(root) {
  if (!root) return 0;
  if (!root.left && !root.right) return 1;

  const initialDepth = 1;
  let deepestLevel = initialDepth;
  const nodeStack = [[root, initialDepth]];

  while (nodeStack.length) {
    const [node, depth] = nodeStack.pop();
    const nodeIsLeaf = !node.left && !node.right;

    if (nodeIsLeaf && depth > deepestLevel) {
      deepestLevel = depth;
    }

    if (node.left) {
      nodeStack.push([node.left, depth + 1])
    }

    if (node.right) {
      nodeStack.push([node.right, depth + 1])
    }
  }

  return deepestLevel;
};

console.log(maxDepth(sampleRoot));
// 3

//               3
//             /   \
//            9     20
//                 /  \
//               15    7