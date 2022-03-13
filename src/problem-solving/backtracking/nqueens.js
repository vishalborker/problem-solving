const isSafe = (board, row, col, len) => {

        let i, j;
		for (i = 0; i < col; i++) {
			if (board[row][i] == 'Q')
				return false;
		}

		for (i = row, j = col; i >= 0 && j >= 0; i--, j--) {
			if (board[i][j] == 'Q')
				return false;
		}

		for (i = row, j = col; j >= 0 && i < len; i++, j--) {
			if (board[i][j] == 'Q')
				return false;
		}

        console.log({row, col});
		return true;
}

const placeQueen = (board, col) => {
    const len = board.length - 1;

    if (col === len) {
        results.push(board);
        return 1;
    }
    var count = 0;
    
    for(let row = 0; row <= len; row++) {

        if (isSafe(board, row, col, len)) {

            board[row][col] = 'Q';

            count += placeQueen(board, col+1);

            board[row][col] = 0;
        }
    }
    return count;
}

const main = () => {
    board = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
    ];

    count = placeQueen(board, 0);
    console.log({board}, {count});
}

var results = [];
main();
console.log(results);