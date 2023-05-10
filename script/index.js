const dom = require('../script/DOM');
const Players = require('./player');
const Gameboard = require('./gameboard');
const Ship  = require('./ship');

// import DOM from "./DOM";
// import Players from "./player";
// import Gameboard from "./gameboard";
// import Ship from "./ship";

const player1board = document.getElementById('playerboard');
const player2board = document.getElementById('compboard');
const playerboard = new Gameboard();
dom.renderBoard(player1board, playerboard);