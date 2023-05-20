import Gameboard from "./gameboard";
import doM from "./DOM";
import { placeships } from "./placeships";

function gameLoop(player1, player2) {
  let compboard, playerboard;
  playerboard = Gameboard();
  compboard = Gameboard();
  const clickedCells = [];
  const player1board = document.getElementById("playerboard");
  const player2board = document.getElementById("compboard");
  doM.renderBoard(player1board, "player");
  doM.renderBoard(player2board, "computer");


  placeships("computer", compboard);

  let playerShips = playerboard.getShips();
  console.log(compboard.getShips());
  let previousAttack = new Set(); //to prevent the comp from attacking the same index twice
  let currentPlayer = player1;
  let gameOver = false;
  let previousHits = [];

  
  player2board.addEventListener("click", (e) => {
      if(shipPlaced){
        const isvalidclick = checkDouble(e);
        if (isvalidclick) {
          if (currentPlayer !== player1 || gameOver) {
            return;
          }
          handleClick(e);
          checkgameOver();
          currentPlayer = switchPlayer();
          setTimeout(computerTurn, 100);
        }
      }

    });


  function checkDouble(e) {
    const cellindex = e.target.dataset.index;
    if (clickedCells.includes(cellindex)) {
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
      event.target.style.backgroundColor = "#02d91b";
    }
  }

  let attackIndex;

  function computerTurn() {
    if(previousHits.length > 0){
      const lastAttack = previousHits[previousHits.length - 1];
      const lastAdjacentIndex = getAdjacentIndex(lastAttack);
      console.log(lastAdjacentIndex);
      for(const index of lastAdjacentIndex){
        if(!previousAttack.has(index)){
          attackIndex = index;
          break;
        }
      }
      previousHits.pop(); 
    }
    else{
      attackIndex = randomAttack();
    }

    computerAI(attackIndex);
  }

  function randomAttack() {
    let x = Math.floor(Math.random() * 100);
    while (previousAttack.has(x)) {
      x = Math.floor(Math.random() * 100);
    }
    return x;
  }

  function computerAI(i) {
    if (gameOver) {
      return;
    }
    const comphit = playerboard.receiveAttack(i);
    const cell = player1board.querySelector(`[data-index='${i}']`);
    if (comphit === true) {
      cell.style.backgroundColor = "#f70202";
      previousHits.push(i);
      console.log(previousHits);
    } else {
      cell.style.backgroundColor = "#02d91b";
    }
    previousAttack.add(i);
    checkgameOver();
    currentPlayer = switchPlayer();
  }

  function switchPlayer() {
    return (currentPlayer = currentPlayer === player1 ? player2 : player1);
  }

  function checkgameOver() {
    if (playerboard.allShipsSunk()) {
      gameOver = true;
      document.getElementById('winner').innerText = "Computer Win!";
      player2board.removeEventListener("click", handleClick);
      return;
    }
    if (compboard.allShipsSunk()) {
      gameOver = true;
      document.getElementById('winner').innerText = "You Win!";
      return;
    }
  }
}

export default gameLoop;
