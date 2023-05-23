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


  

  let shipPlaced = false;
  shipPlaced = placeships("player", playerboard)
  let compShips= compboard.getShips();
  do{
    placeships("computer" , compboard);
  } while(compShips !=4)
  console.log(compboard.getShips());
  let previousAttack = new Set(); //to prevent the comp from attacking the same index twice
  let currentPlayer = player1;
  let gameOver = false;

  
  player2board.addEventListener("click", (e) => {
      if(shipPlaced && compShips){
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
  let left,right = null
  function computerTurn() {
    if(left!= null || right!=null){
      if(left!=null){
        attackIndex = left;
        left = left -1;
      }
       else if(right!= null){
        attackIndex = right;
        right = right + 1;
      }
    } else{
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
      if(left == null){
        left = i - 1;
      }
      if(previousAttack.has(left)){
        left = null;
      }
      if(right == null){
        right = i + 1;
      }
      if(previousAttack.has(right)){
        right = null;
      }
    } else {
      cell.style.backgroundColor = "#02d91b";
      if(left != null){
        left = null
      }
      else{
        right = null;
      }
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
