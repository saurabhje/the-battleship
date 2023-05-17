import Players from "./player";
import Gameboard from "./gameboard";
import Ship from "./ship";
import doM from "./DOM";
import { placeships } from "./placeships";

function gameLoop(player1, player2) {
  let compboard, playerboard;
  playerboard = Gameboard();
  compboard = Gameboard();
  const clickedCells = [];
  const player1board = document.getElementById("playerboard");
  const player2board = document.getElementById("compboard");
  doM.renderBoard(player1board,"player");
  doM.renderBoard(player2board, "computer");


  placeships("player",playerboard);
  placeships("computer",compboard);

 
  let previousAttack = new Set(); //to prevent the comp from attacking the same index twice
  let currentPlayer = player1;
  let gameOver = false;

  const cells = document.querySelectorAll('.cell');
  
  player2board.addEventListener("click", (e) => {
    const isvalidclick = checkDouble(e);
    if(isvalidclick){
      if (currentPlayer !== player1 || gameOver) {
        return;
      }
      handleClick(e);
      checkgameOver();
      currentPlayer = switchPlayer();
      setTimeout(computerTurn, 500);
    }
    
  });


  
  function checkDouble(e){
    const cellindex = e.target.dataset.index;
    if(clickedCells.includes(cellindex)){
      return false;
    }
    clickedCells.push(cellindex);
    return true;
  }

  function handleClick(event) {
    if (gameOver) {
      return;
    }
    const cellindex = event.target.dataset.index;
    const result = compboard.receiveAttack(cellindex);
    if (result === true) {
      event.target.style.backgroundColor = "#f70202";
    } else {
      event.target.style.backgroundColor = "#4a4848";
    }
  }

  function computerTurn() {
    if (gameOver) {
      return;
    }
    let x = Math.floor(Math.random() * 100);
    while(previousAttack.has(x)){
      x = Math.floor(Math.random() * 100);
    }
    const comphit = playerboard.receiveAttack(x);
    const cell = player1board.querySelector(`[data-index='${x}']`);
    if (comphit === true) {
      cell.style.backgroundColor = "#f70202";
    } else {
      cell.style.backgroundColor = "#4a4848";
    }
    previousAttack.add(x);
    checkgameOver();
    currentPlayer = switchPlayer();
  }

  function switchPlayer() {
    return (currentPlayer = currentPlayer === player1 ? player2 : player1);
  }

  function checkgameOver() {
    if (playerboard.allShipsSunk()) {
      gameOver = true;
      console.log("Game over! Computer won!");
      player2board.removeEventListener("click", handleClick);
      return;
    }
    if (compboard.allShipsSunk()) {
      gameOver = true;
      console.log("Game over! Player won!");
      return;
    }
  }
}

export default gameLoop;
