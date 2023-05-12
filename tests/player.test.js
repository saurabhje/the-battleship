import Gameboard from "../script/gameboard";
import Ship from "../script/ship";
import Players from "../script/player";


let player1, player2, ship1, ship2, playerboard, compboard;

beforeEach(() => {
  playerboard =  Gameboard();
  compboard =  Gameboard();
  player1 = Players(playerboard, 'Player');
  player2 = Players(compboard, 'computer');
  ship1 = new Ship(5);
});

test('attacking a random spot on the board', () => {
  playerboard.placeShip(ship1, [1, 2, 3, 4, 5]);
  expect(player1.Attack(0)).toBeFalsy();
});

test('Testing the attack Method', () => {
  ship2 = Ship("kremlin",4);
  playerboard.placeShip(ship2, [6, 7, 8, 9]);
  expect(playerboard.allShipsSunk()).toBeFalsy();
  [6, 7, 8, 9].forEach((coord) => player1.Attack(coord));
  expect(playerboard.allShipsSunk()).toBeTruthy();
});

test('Testing the randomAttack method', () => {
    expect(player2.previousAttacks.size).toBe(0);
    for (let i = 0; i < 10; i++) {
      player2.randomAttack();
    }
    expect(player2.previousAttacks.size).toBe(10);
  });
  

