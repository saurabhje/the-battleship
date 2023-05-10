import Players from "./player";
import Gameboard from "./gameboard";
import Ship from "./ship";

//Just Testing it
let player1,player2,compboard,playerboard;
playerboard = new Gameboard();
compboard = new Gameboard();

player1 = new Players(playerboard, 'player');
player2 = new Players(compboard, 'comp');

playerboard.placeShip(Ship(3),[1,2,3]);
playerboard.placeShip(Ship(3),[5,6,7]);

compboard.placeShip(Ship(3),[1,2,4,]);
compboard.placeShip(Ship(3),[8,9,10]);