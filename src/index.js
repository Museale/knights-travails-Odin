import { prettyPrint } from '../_prettyprint';
const createGameboard = () => {
  const gameboard = [];

  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      gameboard.push([row, col]);
    }
  }
  return gameboard;
};

const createNode = (position) => {
  const node = {
    data: position,
    x: position[0],
    y: position[1],
    around: [],
    next: null,
  };
  return node;
};

const knightMoves = (start, goal) => {

  const gameboard = createGameboard();

  const startIndex = gameboard.findIndex(
    (pos) => pos[0] === start[0] && pos[1] === start[1],
  );

  start = createNode(gameboard[startIndex]);

  const createTree = (start) => {
    const moves = (node) => {
      const surroundingPositions = [];

      const possibleMoves = [
        [-2, -1],
        [-2, 1],
        [-1, -2],
        [-1, 2],
        [1, -2],
        [1, 2],
        [2, -1],
        [2, 1],
      ];

      for (const [dx, dy] of possibleMoves) {
        const newX = node.x + dx;
        const newY = node.y + dy;

        if (newX >= 0 && newY >= 0 && newX < 8 && newY < 8) {
          surroundingPositions.push([newX, newY]);
        }
      }
      return surroundingPositions;
    };

    const buildTree = (array, start = 0, end = array.length - 1) => {
      if (start > end) return null;

      const mid = Math.floor((start + end) / 2);
      const root = createNode(array[mid]);

      root.around = moves(root);
     

      root.left = buildTree(array, start, mid - 1);
      root.right = buildTree(array, mid + 1, end);

      return root;
    };

    const board = buildTree(gameboard);

    const findNode = (nodeToBeFound, node) => {
      if (node === null) {
        console.log('Node not present in tree.');
        return false;
      }
      let found = false;
      //If values are equal return true
      if (nodeToBeFound === node.data) {
        console.log(`Node with value ${node.data} is present in tree: `, node);
        return true;
      }
      //traverse recursively through tree
      if (nodeToBeFound > node.data) {
        found = findNode(nodeToBeFound, node.right);
      } else if (nodeToBeFound < node.data) {
        found = findNode(nodeToBeFound, node.left);
      }
      return found;
    };

    const traverse = (node) => {
      if (node === null) return;

      traverse(node.left);

      console.log([node.y, node.x], node.around);

      traverse(node.right);
    };

    console.log(start);
    prettyPrint(board);
    traverse(board);

    return board;

  };


  const tree = createTree(gameboard);
    
};



knightMoves([3, 7], [5, 2]);
