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

    // const findNode = (nodeToBeFound, node) => {
    //   if (node === null) {
    //     console.log('Node not present in tree.');
    //     return false;
    //   }
    //   let found = false;
    //   //If values are equal return true
    //   console.log(nodeToBeFound, node);
    //   if (nodeToBeFound == node.data) {
    //     console.log(`Node with value ${node.data} is present in tree: `, node);
    //     found = true;
    //   }
    //   //traverse recursively through tree
    //   if (nodeToBeFound > node.data) {
    //     found = findNode(nodeToBeFound, node.right);
    //   } else if (nodeToBeFound < node.data) {
    //     found = findNode(nodeToBeFound, node.left);
    //   }
    //   return found;
    // };
    // console.log(goal);
    // console.log(findNode(goal, board));

    const traverse = (node, goal) => {
      if (node === null) return;
      node.around.forEach(el => {
       if (el == goal) {
        const path = [start, goal];
        console.log('Path taken', path)
        return path;
       }

      })
      traverse(node.left);
      traverse(node.right);
    };

    console.log(start);
    prettyPrint(board);
    
    const findPath = (node, goal) => {
 
      traverse(node, goal);

      //make an array of  [start, move, move, move, move, move, move, move, move];
      //all arrays start with start + first move
      //
    };
    findPath(board, goal)
    return board;
  };



  const tree = createTree(gameboard);

};

knightMoves([0,0], [1, 2]);
