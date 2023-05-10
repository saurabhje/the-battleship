import doM from "./DOM";
import Player from "./player";
import Gameboard from "./gameboard";
import Ship from "./ship";

const player1board = document.getElementById('playerboard');
const player2board = document.getElementById('compboard');
const playerboard = new Gameboard();
const compboard = new Gameboard();
doM.renderBoard(player1board, playerboard);
doM.renderBoard(player2board, compboard);