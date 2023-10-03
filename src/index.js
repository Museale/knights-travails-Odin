import { prettyPrint } from '../_prettyprint';

const createGameboard = () => {
    const gameboard = [];

    for(let row = 0; row < 8; row++) {
        for(let col = 0; col < 8; col++){
        gameboard.push([row, col]);
        }
    }
    return gameboard;
};

const createNode = (data) => {
   const node = {
        data: data,
        around: null,
        next: null
    };
    return node;
};

const knightMoves = (start, goal) => {
    const gameboard = createGameboard();
    
    const startIndex = gameboard.findIndex(pos => pos[0] === start[0] && pos[1] === start[1]);
    start = createNode(gameboard[startIndex]);

    // const possibleMoves = [
    //     [-2, +1],[-2, -1],
    //     [+2, -1],[+2, +1],
    //     [+1, +2],[+1, -2],
    //     [-1, -2],[-1, +2]
    // ];

    // for(let move of possibleMoves) {

    // }

    // const newArr = [];

    // const moves = () => {
    // for (const [x, y] of possibleMoves) {
    //     const newX = start[0] + x;
    //     const newY = start[1] + y;
    //     newArr.push([newX, newY]);
    // }
    // };

    // console.log(gameboard[startIndex])

    // // const buildTree = (start, goal) => {
    //     //make a bts
    //     //root = start
    //     //loop through push possiblemoves into around prop
    //     //




    // // }

    // // let root = buildTree(gameboard);

    // console.log(gameboard)
    // // prettyPrint(root)

    //gameboard[startIndex][0] +/- 2 => gameboard[startIndex][1] +/- 1
    //gameboard[startIndex][1] +/- 2 => gameboard[startIndex][0] +/- 1


    // console.log(root)
    // console.log(newArr)
    //path arr}
    

    //starting square
    //1 make an array of all possible moves
    //2 make an array of all possible moves from each element in the previous array
    // if array contains goal 
    // count back amount of arrays in each step
    //return each arr step 
    // else repeat 2
    
    const createTree = (start) => {

        const possibleMoves = [
            [-2, -1], [-2, 1],
            [-1, -2], [-1, 2],
            [1, -2], [1, 2],
            [2, -1], [2, 1]
        ];
        const newArr = [];
        const sortedArr = [];

        for (const [x, y] of possibleMoves) {
            const newX = gameboard[startIndex][0] + x;
            const newY = gameboard[startIndex][1] + y;
      
                if(newX >= 0 && newY >= 0 && newX < 8 && newY < 8) {
                    sortedArr.push([newX,newY]);
            }
        };
        const buildTree = (array, start = 0, end = array.length - 1) => {
            if (start > end) return null;
        
            const mid = Math.floor((start + end) / 2);
            const root = createNode(array[mid]);

            root.around = sortedArr;
        
            root.left = buildTree(array, start, mid - 1);
            root.right = buildTree(array, mid + 1, end);
        
            return root;
          };

        

          const inOrder = (node = root, fn = null, result = []) => {
            const traverse = (node) => {
              if (node === null) return;
              traverse(node.left);
              result.push([node.data, node.around]);
              traverse(node.right);
            };
        
            traverse(node);
            if (fn) {
              result.forEach(fn);
            }
            console.log("InOrder: ", result);
            return result;
          };

          let root = buildTree(sortedArr);
          let board = buildTree(gameboard)
         
          console.log(root)
            console.log(start)

        prettyPrint(root)
        prettyPrint(board)
        // console.log(inOrder(board))
        return root
       
    };
 
        const tree = createTree(gameboard);
    
   
    return tree;
};


knightMoves([3,7], [5,2]);