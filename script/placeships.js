import Ship from "./ship";
import Gameboard from "./gameboard";

function placeships(holder, playerboard) {
  if (holder === "player") {
    const shipsLength = [5, 4, 3, 2];
    let shipslen = shipsLength.length;
    const cells = document.querySelectorAll('.cell');
    let game = true;
    let i = 0;
    const turn = document.getElementById('turn');
    console.log(i)
    if (game) {
      cells.forEach(cell => {
        cell.addEventListener('click', (event) => {
          const cell = event.target;
          const index = parseInt(cell.dataset.index);
          const canPlaceShip = checkShipPlacement(playerboard, index, shipsLength[i]);
          const noOverlap = checkOverlap(index, shipsLength[i]);
          if(i ==0){
            turn.innerText = "Place your Submarine";
          }
          else if(i==1){
            turn.innerText = "Place your Attackerr";
          }
          else if(i==2){
            turn.innerText = "Place your Ship";
          }
          else{
            turn.innerText = "Play";
          }
          if (canPlaceShip && noOverlap) {
            console.log(playerboard.board);
            const ship = Ship(shipsLength[i]);
            playerboard.placeShip(ship, index);  
            for (let k = 0; k < shipsLength[i]; k++) {
              document.querySelector(`.h${index + k}`).style.backgroundColor = 'blue';
            }
            i++;
            if (i === shipslen) {
              game = false;
            }
          }
        });
      });
    }
  } else if (holder === "computer") {
    const shipsLength = [5, 4, 3, 2];
    let shipslen = shipsLength.length;
    let i = 0;
    
    while (i < shipslen) {
      let ship = Ship(shipsLength[i]);
      let index = Math.floor(Math.random() * 100);
      const noOverlap = checkOverlap(index, shipsLength[i]);

      if (!noOverlap) { // Check if the ship is overlapping
        continue;
      }
      
      let temp = index;
      playerboard.placeShip(ship, index);
      
      
      i++; 
    }     
  }
}

function checkOverlap(startIndex, length) {
  let lastCellIndex = startIndex + length - 1;
  let indexrow = Math.floor(startIndex / 10);
  let lastrow = Math.floor(lastCellIndex / 10);
  
  if (lastrow > indexrow) {
    return false;
  }
  
  return true;
}

function checkShipPlacement(playerboard, startIndex, length) {
  const board = playerboard.getBoard();
  for (let i = 0; i < length; i++) {
    const indices = startIndex + i;

    if (board[indices] !== null) {
      return false;
    }
  }
  
  return true;
}

export { placeships };
