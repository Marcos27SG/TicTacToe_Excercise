var tictactoeUtils = require('../src/TicTacToeUtils');

var assert = require('assert');
describe("the function", function () {
  it("works", function () {
    var ticTacToeUtils = new tictactoeUtils.TicTacToeUtils();
    var board = ticTacToeUtils.buildBoard(2);
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
});

describe("the function", function () {
  it("should not work", function () {
    var ticTacToeUtils = new tictactoeUtils.TicTacToeUtils();
    var board = ticTacToeUtils.buildBoard(5);
    console.log("G", board);
    var expectedBoard = {
        board: [  
        ],
        empty: [
        ]
        };
    assert.notEqual(board, expectedBoard);
  });
});

