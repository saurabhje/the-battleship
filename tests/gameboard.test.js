import Gameboard from "../script/gameboard";
import Ship from "../script/ship";
let gameboard;
let ship;


beforeEach(()=>{
  gameboard = Gameboard();
  ship = Ship("cruise",3);
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
  expect(gameboard.allShipsSunk()).toBeFalsy();
  gameboard.receiveAttack(4);
  expect(gameboard.allShipsSunk()).toBeFalsy();
  gameboard.receiveAttack(5);
  console.log(gameboard.allShipsSunk());
  expect(gameboard.allShipsSunk()).toBeTruthy();
});

