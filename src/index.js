import './style.scss';

const createGameboard = () => {
    const gameboard = document.getElementById('gameboard');

    for(let row = 0; row < 8; row++) {
        for(let col = 0; col < 8; col++){
        const square = document.createElement('div');
        square.id = `square-${row}-${col}`;
        square.classList = 'square';
        square.classList.add(row % 2 === 0 ? 'white-square' : 'black-square');
        gameboard.appendChild(square);
    };}
}

createGameboard()
