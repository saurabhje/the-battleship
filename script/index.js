import doM from "./DOM";
import Player from "./player";
import Gameboard from "./gameboard";
import Ship from "./ship";
import gameLoop from "./gameloop";

let player, computer;
let compboard, playerboard;
player = Player(compboard,"Player");
computer = Player(playerboard,"Computer");

gameLoop(player,computer);
