import DOM from "./DOM";
import Player from "./player";
import Gameboard from "./gameboard";
import Ship from "./ship";

const player1board = document.getElementById('playerboard');
const player2board = document.getElementById('compboard');
const playerboard = new Gameboard();
renderBoard(player1board, playerboard);