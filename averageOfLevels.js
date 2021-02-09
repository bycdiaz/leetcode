// Given a non-empty binary tree, return the average value of
// the nodes on each level in the form of an array.

function calculateAverage(numbersArray) {
  return numbersArray.reduce((total, number) => {
    return total + number;
  }) / numbersArray.length;
}

function averageOfLevels(root) {
  console.log(root);
  const nodeQueue = [[root, 0]];
  const levelValues = {

  };

  while (nodeQueue.length) {
    const [node, depth] = nodeQueue.shift();

    if (levelValues[depth]) {
      levelValues[depth].push(node.val);
    } else {
      levelValues[depth] = [];
      levelValues[depth].push(node.val);
    }

    if (node.left) {
      nodeQueue.push([node.left, depth + 1]);
    }

    if (node.right) {
      nodeQueue.push([node.right, depth + 1]);
    }
  }

  return Object.values(levelValues).reduce((averages, levelArray) => {
    const levelAverage = calculateAverage(levelArray);
    averages.push(levelAverage);

    return averages;
  }, []);
};


class TreeNode {
  constructor(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
  }
}

const sampleTree1 = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
const sampleTree2 = new TreeNode(3, new TreeNode(1, new TreeNode(0), new TreeNode(2)), new TreeNode(5, new TreeNode(4), new TreeNode(6)));


console.log(averageOfLevels(sampleTree2));
// [3.00000,3.00000,3.00000]

// console.log(averageOfLevels(sampleTree1));
// [3, 14.5, 11]
