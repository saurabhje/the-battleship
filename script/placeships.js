import Ship from "./ship";
import doM from "./DOM";
function placeships(holder, board) {
  if(holder == "player"){
    const shipsLength = [5, 4, 3, 2];
    let shipslen = shipsLength.length;
    const cells = document.querySelectorAll('.cell');
    let game = true
    let i = 0
    if(game){
      cells.forEach(cell => {
        cell.addEventListener('click', (event) => {
          const cell = event.target;
          const index = parseInt(cell.dataset.index);
          let temp = index;
          const ship = Ship(shipsLength[i]);
          board.placeShip(ship, index);
          if(indexbreak )
          let num = `{indexbreak}9`
          
          for (let k = 0; k < shipsLength[i]; k++) {
            document.querySelector(`.h${temp}`).style.backgroundColor = 'blue';
            temp++;
          }
          i++
          if(i == shipslen){
            game = false;
          }
        });
      })
    }
  }
  else if (holder == "yourmom"){
    const shipsLength = [5, 4, 3, 2];
    let shipslen = shipsLength.length;  
    for (let i = 0; i < shipslen; i++) {
      let index = Math.floor(Math.random()*100);
      let temp = index;
      console.log(`hello${temp}`)
      let ship = Ship(shipsLength[i]);
      board.placeShip(ship,index);
      for (let k = 0; k < shipsLength[i]; k++) {
        document.querySelector(`.e${temp}`).style.backgroundColor = 'blue';
        temp++;
      }
        };
      };
}
  



export {placeships}