var grid = [
    ['W', 'W', 'R', 'R', 'G'],
    ['W', 'Y', 'Y', 'R', 'G'],
    ['W', 'W', 'R', 'R', 'G'],
    ['W', 'W', 'G', 'R', 'Y']
];

/**
 * 
 * @param {string[][]} grid 
 * @returns {maxSize}
 */
var findMax = function (grid) {
    var visited = new Set();
    var maxSize = -1;
    var map = {
        'W': 0,
        'R': 0,
        'Y': 0,
        'G': 0,
    };

    for(i = 0; i< grid.length; i++) {
        for(j = 0; j< grid[0].length; j++) {
            const { currentColor, count } = explore(grid, i, j, grid[i][j], visited);

            if (count > map[currentColor])
                map[currentColor] = count;

            if (count > maxSize) {
                maxSize = count;
            }
        }   
    }
    return maxSize;
}

/**
 * 
 * @param {string[][]} grid 
 * @param {number} row 
 * @param {number} col 
 * @param {string} currentColor 
 * @param {object} visited 
 * @returns 
 */
var explore = function (grid, row, col, currentColor, visited) {
    var rowInBounds = 0 <= row  && row < grid.length;
    var colInBounds = 0 <= col && col < grid[0].length;

    if (!rowInBounds || !colInBounds) {
        return { currentColor, count: 0 };
    }

    var key = `${row},${col}`;
    if (visited.has(key)) {
        return { currentColor, count: 0 };
    }

    console.log({row, col}, {color: currentColor}, {visited}, {gridrowcol: grid[row][col]});
    
    if (grid[row][col] !== currentColor) {
        return { currentColor, count: 0 };
    }
    
    visited.add(key);
    var count = 1;

    count += explore(grid, row, col + 1, currentColor, visited).count;
    count += explore(grid, row, col - 1 , currentColor, visited).count;
    count += explore(grid, row - 1, col, currentColor, visited).count;
    count += explore(grid, row + 1, col, currentColor, visited).count;

    console.log({row, col}, {color: currentColor}, {gridrowcol: grid[row][col]});

    return { currentColor, count };;
}


var result = findMax(grid);

console.log({result});