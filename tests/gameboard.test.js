const Gameboard = require('../script/gameboard.js');
const Ship = require('../script/ship');

let gameboard;
let ship;

beforeEach(()=>{
    gameboard = new Gameboard();
    ship = new Ship(3);
})

test('Testing the PlaceShip function',()=>{
    gameboard.placeShip(ship,[3,4,5,6,7]);
    expect(gameboard.allShipsSunk()).toBeFalsy();
    expect (gameboard.receiveAttack(0)).toBeFalsy();
    expect(gameboard.receiveAttack(3)).toBeTruthy();
})

