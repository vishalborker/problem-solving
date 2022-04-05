/*
Write a program to solve a Sudoku puzzle by filling the empty cells.

A sudoku solution must satisfy all of the following rules:

Each of the digits 1-9 must occur exactly once in each row.
Each of the digits 1-9 must occur exactly once in each column.
Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
The '.' character indicates empty cells.

 

Example 1:


Input: board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]
Output: [["5","3","4","6","7","8","9","1","2"],["6","7","2","1","9","5","3","4","8"],["1","9","8","3","4","2","5","6","7"],["8","5","9","7","6","1","4","2","3"],["4","2","6","8","5","3","7","9","1"],["7","1","3","9","2","4","8","5","6"],["9","6","1","5","3","7","2","8","4"],["2","8","7","4","1","9","6","3","5"],["3","4","5","2","8","6","1","7","9"]]
Explanation: The input board is shown above and the only valid solution is shown below:


 

Constraints:

board.length == 9
board[i].length == 9
board[i][j] is a digit or '.'.
It is guaranteed that the input board has only one solution.

*/



/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */


var printBoard = function(board) {
    for(i = 0; i < board.length; i++ ) {
        for(j=0; j<board[0].length; j++) {
            process.stdout.write(board[i][j] + " ");
        }
        process.stdout.write("\n");
    }
}


var solve = function(board) {

    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[0].length; j++) {
            if(board[i][j] == '.') {
                for(c = '1'; c <= '9'; c++) {
                    if(isValid(board, i, j, c)) {
                        board[i][j] = String(c);
                        // console.log({afterPlacing: c}, {i,j})

                        if(solve(board) === true) {
                            return true;
                        } else {
                            board[i][j] = '.';
                        }
                    }
                }
                return false;
            }
        }
    }
    return true;
}


// O(kn^2)
var isValid = function(board, row, col, character) {
    for(let k = 0; k < 9; k++) {
        if(board[row][k] == character) {
            return false;
        }
        if(board[k][col] == character) {
            return false;
        }

        var boxRow = 3 * Math.floor(row / 3) + Math.floor(k/3);
        var boxCol = 3 * Math.floor(col / 3) + k % 3;

        if(board[boxRow][boxCol] == character) {
            return false;
        }
    }
    return true;
}

var solveSudoku = function(board) {
    solve(board);
    printBoard(board);
};

// var board = [
//     ["5","3","4","6","7",".",".",".","."],
//     ["6",".",".","1","9","5",".",".","."],
//     [".","9","8",".",".",".",".","6","."],
//     ["8",".",".",".","6",".",".",".","3"],
//     ["4",".",".","8",".","3",".",".","1"],
//     ["7",".",".",".","2",".",".",".","6"],
//     [".","6",".",".",".",".","2","8","."],
//     [".",".",".","4","1","9",".",".","5"],
//     [".",".",".",".","8",".",".","7","9"]
// ]

var board = [
    ["5","3","4","6","7","8","9","1","2"],
    ["6",".",".","1","9","5",".","4","8"],
    [".","9","8",".",".","2",".","6","7"],
    ["8",".",".",".","6","1","4","2","3"],
    ["4",".","6","8",".","3",".",".","1"],
    ["7",".","3",".","2",".",".",".","6"],
    [".","6","1",".",".",".","2","8","4"],
    [".",".",".","4","1","9",".",".","5"],
    [".","4","5",".","8","6",".","7","9"]
];

solveSudoku(board);



