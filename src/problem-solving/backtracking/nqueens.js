const isSafe = (board, row, col, len) => {
    // check full row
        let i, j;

        // i = 0; i < 2
        // row = 3;
        // checks 3,0 3,1 3,2
		for (i = 0; i < col; i++) {
			if (board[row][i] == 'Q')
				return false;
		}

        // i=3 i>=0
        // j=2 j>=0

        // checks 3,2 2,1 1,0
		for (i = row, j = col; i >= 0 && j >= 0; i--, j--) {
			if (board[i][j] == 'Q')
				return false;
		}

		for (i = row, j = col; j >= 0 && i < len; i++, j--) {
			if (board[i][j] == 'Q')
				return false;
		}
		return true;
}

const placeQueen = (board, col, len) => {
    console.log('Col => ',col, ' len => ', len);
    if (col >= len) {
        return true;
    }
    console.log({rowUsed});
    for(let row = rowUsed; row <= len-1; row++) {
        // if ) {
        //     console.log(' IsSAfe', row, col, len);
        // }
        if (isSafe(board, row, col, len)) {

            board[row][col] = 'Q';
            if (col ===0)
              rowUsed++;
            if (placeQueen(board, col+1, len))
              return true;
            board[row][col] = 0;
        }
    }
    return false;
}

const results = [];
const main = () => {
    let board = [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
    ];
    const len = board[0].length;
    for (k=0; k < len; k++) {
        process.stdout.write('Solution: \n\n');
        if (placeQueen(board, 0, len) === true) {
            // console.log(board);
            results.push(JSON.stringify(board));

            // for(let i= 0 ;i < len; i++) {
            //     for (let j= 0 ;j < len; j++) {
            //         process.stdout.write(String(board[i][j]));
            //     }
            //     process.stdout.write('\n');
            // }
        }

        board = [
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
        ];

        process.stdout.write('\n\n');
    }
}
let rowUsed = 0;
// console.log(board[0].length);
main();
console.log(results);