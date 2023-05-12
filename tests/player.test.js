import Gameboard from "../script/gameboard";
import Ship from "../script/ship";
import Players from "../script/player";


let player1, player2, ship1, ship2, playerboard, compboard;

beforeEach(() => {
  playerboard =  Gameboard();
  compboard =  Gameboard();
  player1 = new Players(playerboard,compboard, 'Player');
  player2 = new Players(compboard,playerboard, 'computer');
  ship1 = new Ship(5);
});

test('attacking a random spot on the board', () => {
  compboard.placeShip(ship1, [1, 2, 3, 4, 5]);
  expect(player1.Attack(compboard, 0)).toBeFalsy();
});

test('Testing the attack Method', () => {
  ship2 = Ship("kremlin",4);
  compboard.placeShip(ship2, [6, 7, 8, 9]);
  expect(compboard.allShipsSunk()).toBeFalsy();
  [6, 7, 8, 9].forEach((coord) => player1.Attack(compboard, coord));
  expect(compboard.allShipsSunk()).toBeTruthy();
});

test('Testing the randomAttack method', () => {
    expect(player2.previousAttacks.size).toBe(0);
    for (let i = 0; i < 10; i++) {
      player2.randomAttack();
    }
    expect(player2.previousAttacks.size).toBe(10);
  });
  

