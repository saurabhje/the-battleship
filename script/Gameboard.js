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
    if (board[coordinates] instanceof Ship) {
      let hitShip = board[coordinates];
      hitShip.hit();
      console.log(hitShip.hit);
      return true;
    } else {
      missedAttacks.push(coordinates)
      return false;
    }
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