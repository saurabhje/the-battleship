import doM from "./DOM";
import Player from "./player";
import Gameboard from "./gameboard";
import Ship from "./ship";
import gameLoop from "./gameloop";

let player, computer;
let compboard, playerboard;
player = Player("Player");
computer = Player("Computer");

gameLoop(player,computer);
