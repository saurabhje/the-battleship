const Ship = require('./ship');

function Gameboard() {
  let board = Array(100).fill(null);
  let ships = [];
  let missedAttacks = [];

  function placeShip(ship, coordinates) {
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
    
    if (hitShip.isSunk()) {
      console.log("You sunk my ship!");
    }
    
    return true;
  }

  function allShipsSunk() {
    return ships.every(ship => ship.isSunk());
  }

  return {
    placeShip,
    receiveAttack,
    allShipsSunk,
    missedAttacks,
  };
}

module.exports = Gameboard;