const Player  = require('../script/player');
const Gameboard = require('../script/gameboard');
const Ship = require('../script/ship');

let player1,player2;
let ship1,ship2;
let playerboard,compboard;

beforeEach(()=>{
    playerboard = new Gameboard();
    compboard = new Gameboard();
    player1 = new Player(playerboard, 'Player');
    player2 = new Player(compboard , 'computer');
    ship1 = new Ship(5);
    ship2 = new Ship(4); 
})

test('attacking a random spot on the board',()=>{
    playerboard.placeShip(ship1, [1,2,3,4,5]);
    expect(player1.attack(0)).toBeFalsy();
})

test('Attacking the ship',()=>{
    playerboard.placeShip(ship1,[1,2,3,4,5]);
    player1.attack(1);
    player1.attack(2);
    player1.attack(3);
    player1.attack(4);
    player1.attack(5);
    expect(playerboard.allShipsSunk()).toBeTruthy();
})