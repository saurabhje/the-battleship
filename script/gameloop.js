import Players from "./player";
import Gameboard from "./gameboard";
import Ship from "./ship";
import doM from "./DOM";

function gameLoop(player1,player2){
    let compboard,playerboard;
    playerboard =  Gameboard();
    compboard = Gameboard();

    playerboard.placeShip(Ship("destroyer",3),[1,2,3]);
    playerboard.placeShip(Ship("cruise",3),[5,6,7]);
    compboard.placeShip(Ship("destroyer",3),[1,2,4,]);
    compboard.placeShip(Ship("cruise",3),[8,9,10]);

    const player1board = document.getElementById('playerboard');
    const player2board = document.getElementById('compboard');
    doM.renderBoard(player1board, playerboard);
    doM.renderBoard(player2board, compboard);

    let currentPlayer = player1;
    let gameOver = false;

    while(!playerboard.allShipsSunk() && !compboard.allShipsSunk()){
        let opponent = currentPlayer === player1 ? player2 : player1;

        if(currentPlayer === player1){
            player2board.addEventListener('click', (event) => {
                const cellindex = event.target.dataset.index;
                const result = player2board.receiveAttack(cellindex);
                if(result === true){
                    document.querySelector('.cell').style.backgroundColor = "#f70202"
                }
                else{
                    document.querySelector('.cell').style.backgroundColor = "#4a4848"
                }
            })
        }
        else{
            const randomIndex = currentPlayer.randomAttack();
            if(randomIndex === true){
                document.querySelector('.cell').style.backgroundColor = "#f70202"
            }
            else{
                document.querySelector('.cell').style.backgroundColor = "#4a4848"
            }
        }
        currentPlayer = opponent;
    }
    if(playerboard.allShipsSunk()){
        console.log('Comp WIn');
    }
    else{
        console.log('Player WIn');
    }
};

export default gameLoop;