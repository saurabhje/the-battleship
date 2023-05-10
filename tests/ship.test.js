import { experiments } from "webpack";
import Ship from "../script/ship";
let ship;
beforeEach(() => {
  ship = new Ship(4);
});

test('testing the Hit function of the ship factory', () => {
  ship.hit();
  expect(ship.hits).toBe(1);
});

test('testing the Hit function', () => {
  ship.hit();
  ship.hit();
  expect(ship.hits).toBe(2);
});