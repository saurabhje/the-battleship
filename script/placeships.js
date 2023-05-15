import Ship from "./ship";

function placeships(holder, board) {
  if (holder === "player") {
    const shipsLength = [5, 4, 3, 2];
    let shipslen = shipsLength.length;
    const cells = document.querySelectorAll('.cell');
    let game = true;
    let i = 0;

    if (game) {
      cells.forEach(cell => {
        cell.addEventListener('click', (event) => {
          const cell = event.target;
          const index = parseInt(cell.dataset.index);
          let temp = index;
          const ship = Ship(shipsLength[i]);
          board.placeShip(ship, index);
          
          for (let k = 0; k < shipsLength[i]; k++) {
            document.querySelector(`.h${temp}`).style.backgroundColor = 'blue';
            temp++;
          }
          
          i++;
          
          if (i == shipslen) {
            game = false;
          }
        });
      });
    }
  } 
  else if (holder === "yourmom") {
    const shipsLength = [5, 4, 3, 2];
    let shipslen = shipsLength.length;
    let i = 0;
    
    while (i < shipslen) {
      let ship = Ship(shipsLength[i]);
      let index = Math.floor(Math.random() * 100);
      let lastCellIndex = index + shipsLength[i] - 1;
      let indexrow = Math.floor(index / 10);
      let lastrow = Math.floor(lastCellIndex / 10);
      
      if (lastrow > indexrow) { // Check if the ship is overflowing
        continue;
      }
      
      let temp = index;
      board.placeShip(ship, index);
      
      for (let k = 0; k < shipsLength[i]; k++) {
        document.querySelector(`.e${temp}`).style.backgroundColor = 'blue';
        temp++;
      }
      
      i++; 
    }     
  }
}

export { placeships }
