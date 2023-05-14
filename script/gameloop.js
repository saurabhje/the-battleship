import Players from "./player";
import Gameboard from "./gameboard";
import Ship from "./ship";
import doM from "./DOM";

function gameLoop(player1, player2) {
  let compboard, playerboard;
  playerboard = Gameboard();
  compboard = Gameboard();

  playerboard.placeShip(Ship("destroyer", 3), [1, 2, 3]);
  playerboard.placeShip(Ship("cruise", 3), [5, 6, 7]);
  compboard.placeShip(Ship("destroyer", 3), [1, 2, 3]);
  compboard.placeShip(Ship("cruise", 3), [8, 9, 10]);

  const player1board = document.getElementById("playerboard");
  const player2board = document.getElementById("compboard");
  doM.renderBoard(player1board, playerboard);
  doM.renderBoard(player2board, compboard);

  let currentPlayer = player1;
  let gameOver = false;

  player2board.addEventListener("click", (e) => {
    if (currentPlayer !== player1 || gameOver) {
      return;
    }
    handleClick(e);
    checkgameOver();
    currentPlayer = switchPlayer();
    setTimeout(computerTurn, 700);
  });

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
    console.log(x);
    const comphit = playerboard.receiveAttack(x);
    const cell = player1board.querySelector(`[data-index='${x}']`);
    if (comphit === true) {
      cell.style.backgroundColor = "#f70202";
    } else {
      cell.style.backgroundColor = "#4a4848";
    }
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
