var tictactoeUtils = require('../src/TicTacToeUtils');

var assert = require('assert');
describe("the function", function () {
  it("works", function () {
    var ticTacToeUtils = new tictactoeUtils.TicTacToeUtils();
    var board = ticTacToeUtils.buildBoard(2);
    console.log("G", board);
    var expectedBoard = {
        board: [
            [
            null,
            null
            ],
            [
            null,
            null
            ]
        ],
        empty: [
            '0 0',
            '0 1',
            '1 0',
            '1 1'
        ]
        };
    assert.notEqual(board, expectedBoard);
  });

  it("won't work", function () {
    var ticTacToeUtils = new tictactoeUtils.TicTacToeUtils();
    var board = ticTacToeUtils.buildBoard(2);
    console.log("G", board);
    var expectedBoard = {};
    assert.notEqual(board, expectedBoard);
  });

  it("test commit", function () {
    var ticTacToeUtils = new tictactoeUtils.TicTacToeUtils();
    var board = ticTacToeUtils.buildBoard(2);
    var expectedBoard = {};
    assert.notEqual(board, expectedBoard);
  });
  it("test commit no 2", function () {
    var ticTacToeUtils = new tictactoeUtils.TicTacToeUtils();
    var board = ticTacToeUtils.buildBoard(2);
    var expectedBoard = {};
    assert.notEqual(board, expectedBoard);
  });
  
});

