
const createGameboard = () => {
    const gameboard = [];

    for(let row = 0; row < 8; row++) {
        for(let col = 0; col < 8; col++){
        gameboard.push([row, col]);
        }
    }
    return gameboard;
};


const knightMoves = (start, goal) => {
    const gameboard = createGameboard();
    console.log(gameboard)

    const startIndex = gameboard.findIndex(pos => pos[0] === start[0] && pos[1] === start[1]);

    console.log(startIndex)

    //gameboard[startIndex][0] +/- 2 => gameboard[startIndex][1] +/- 1
    //gameboard[startIndex][1] +/- 2 => gameboard[startIndex][0] +/- 1
    
    const possibleMoves = [
        [-2, +1],[-2, -1],
        [+2, -1],[+2, +1],
        [+1, +2],[+1, -2],
        [-1, -2],[-1, +2]
    ];

    let root;
    const newArr = [];

    for (const [x, y] of possibleMoves) {
        const newX = start[0] + x;
        const newY = start[1] + y;
        newArr.push([newX, newY]);
        console.log(newArr)
    }

    //path arr


    //starting square
    //1 make an array of all possible moves
    //2 make an array of all possible moves from each element in the previous array
    // if array contains goal 
    // count back amount of arrays in each step
    //return each arr step 
    // else repeat 2




};

knightMoves([4,3], [2,2]);