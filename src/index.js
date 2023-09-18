
const createGameboard = () => {
    const gameboard = [];

    for(let row = 0; row < 8; row++) {
        for(let col = 0; col < 8; col++){
        gameboard.push(`${row}-${col}`);
        console.log(gameboard)
    };
    }

    //create a node tree and make the squares using this instead
    
}

createGameboard()
