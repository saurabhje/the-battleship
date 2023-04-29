const Ship = require('../script/ship');

let ship;

beforeEach(() => {
  ship = new Ship(4);
});

test('testing the Hit function of the ship factory', () => {
  ship.Hit();
  expect(ship.hit).toBe(1);
});

test('testing the Hit function', () => {
  ship.Hit();
  ship.Hit();
  expect(ship.hit).toBe(2);
});