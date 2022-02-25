/*
Write a function, minSizeIsland, that takes in a grid containing Ws and Ls.
W represents water and L represents land. The function should return the size of island with minimum size on the grid,
An island is vertically or horizontaly connected region of land
*/

const grid = [
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'L', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W'],
]; 


const minSizeIsland = (grid) => {
    const visited = new Set();
    let minSize = Infinity;
    for(let r = 0; r < grid.length; r++) {
        for(let c = 0; c < grid[0].length; c++) {
            const size = exploreSize(grid, r, c, visited);

            if (size > 0 && size < minSize) {
                minSize = size;
            }
        }
    }
    return minSize;
}


const exploreSize = (grid, row, col, visited) => {
    const rowInBounds = 0 <= row && row < grid.length;
    const colInBounds = 0 <= col && col < grid[0].length;

    if (!rowInBounds || !colInBounds) return 0;

    if(grid[row][col] === 'W') return 0;

    const pos = row + ',' + col;

    if (visited.has(pos)) return 0;

    visited.add(pos);

    let size = 1;

    size += exploreSize(grid, row - 1, col, visited); // check up
    size += exploreSize(grid, row + 1, col, visited); // check down
    size += exploreSize(grid, row, col - 1, visited); // check left
    size +=  exploreSize(grid, row, col + 1, visited); // check right

    return size;
}

const minSize = minSizeIsland(grid);

console.log({minSize});