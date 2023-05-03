const Gameboard = require('../script/gameboard');
const Ship = require('../script/ship');



let gameboard;
let ship;


beforeEach(()=>{
  gameboard = new Gameboard();
  ship = new Ship(3);
});


test('placing a ship on the gameboard',()=>{
  gameboard.placeShip(ship, [3, 4, 5]);
  expect(gameboard.allShipsSunk()).toBeFalsy();
});

test('attacking an empty spot on the gameboard',()=>{
  expect(gameboard.receiveAttack(0)).toBeFalsy();
});

test('attacking a spot where there is a ship',()=>{
  gameboard.placeShip(ship, [3, 4, 5]);
  expect(gameboard.receiveAttack(3)).toBeTruthy();
});

test('sinking a ship on the gameboard',()=>{
  gameboard.placeShip(ship, [3, 4, 5]);
  gameboard.receiveAttack(3);
  gameboard.receiveAttack(4);
  gameboard.receiveAttack(5);
  expect(gameboard.allShipsSunk()).toBeTruthy();
});
