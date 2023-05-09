const Player = require('../script/player');
const Gameboard = require('../script/gameboard');
const Ship = require('../script/ship');
const { experiments } = require('webpack');

let player1, player2, ship1, ship2, playerboard, compboard;

beforeEach(() => {
  playerboard = new Gameboard();
  compboard = new Gameboard();
  player1 = new Player(playerboard, 'Player');
  player2 = new Player(compboard, 'computer');
  ship1 = new Ship(5);
  ship2 = new Ship(4);
});

test('attacking a random spot on the board', () => {
  playerboard.placeShip(ship1, [1, 2, 3, 4, 5]);
  expect(player1.attack(0)).toBeFalsy();
});

test('Testing the attack Method', () => {
  playerboard.placeShip(ship1, [1, 2, 3, 4, 5]);
  [1, 2, 3, 4, 5].forEach((coord) => player1.attack(coord));
  expect(playerboard.allShipsSunk()).toBeTruthy();
});

test('Testing the randomAttack method', () => {
    expect(player2.previousAttacks.size).toBe(0);
  
    // Make a few moves with randomAttack and check that the previousAttacks set grows
    for (let i = 0; i < 10; i++) {
      console.log('est')
      player2.randomAttack();
    }
    expect(player2.previousAttacks.size).toBe(10);
  });
  

