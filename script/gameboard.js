import Ship from "./ship";
function Gameboard() {
  let board = Array(100).fill(null);
  let ships = [];
  let missedAttacks = [];


  function placeShip(ship,index) {
    let shiplength = ship.length;
    let coordinates = [];
    for(let i=0;i<shiplength;i++){
      coordinates.push(index+i);
    }
    coordinates.forEach(coord => {
      board[coord] = ship;
    });
    ships.push(ship);

  }
  
  function receiveAttack(coordinates) {
    if (board[coordinates] === null) {
      missedAttacks.push(coordinates);
      return false;
    }
    const hitShip = board[coordinates];
    hitShip.hit();
    return true;
  }

  function allShipsSunk() {
    console.log(ships.every(ship => ship.isSunk()))
    return ships.every(ship => ship.isSunk());
  }
  function getBoard(){
    return board;
  }

  return {
    board,
    getBoard,
    placeShip,
    receiveAttack,
    allShipsSunk,
    missedAttacks,
  };
}

export default Gameboard;