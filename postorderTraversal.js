function postOrder(root) {
  if (!root) return -1;

  const stack = [root];
  const traversalOrder = [];

  while (stack.length) {
    const currentNode = stack.pop();

    for (child of currentNode.children) {
      stack.push(child);
    }

    traversalOrder.unshift(currentNode.value)
  }

  return traversalOrder;
};

const tree = {
  value: 1,
  children: [{
    value: 3,
    children: [
      {
        value: 5,
        children: []
      },
      {
        value: 6,
        children: []
      }
    ]
    },{
      value: 2,
      children: []
    }, {
      value: 4,
      children: []
    }
  ]
}

console.log(postOrder(tree));
// [ 5, 6, 3, 2, 4, 1 ]
