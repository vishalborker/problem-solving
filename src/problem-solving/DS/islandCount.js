/*
  Write a function, islandCount, that takes in a grid containing Ws and Ls.
  W represents water and L represents land. The function should return the number of islands on the grid,
  An island is vertically or horizontaly connected region of land
*/

const grid = [
    ['W', 'L', 'W', 'W', 'W', 'W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'L', 'W', 'L', 'W', 'W', 'W'],
    ['L', 'W', 'W', 'L', 'W', 'W', 'W', 'W', 'W', 'W'],
    ['W', 'W', 'L', 'L', 'W', 'W', 'L', 'W', 'W', 'L'],
    ['L', 'W', 'W', 'L', 'L', 'W', 'L', 'W', 'W', 'L'],
    ['L', 'L', 'W', 'W', 'W', 'W', 'L', 'W', 'W', 'L'],
]; 


const islandCount = (grid) => {
    const visited = new Set();
    let countOfIslands = 0;
    const totalRows = grid.length, totalCol = grid[0].length;
    for(let r = 0; r < totalRows; r++) {
        for(let c = 0; c < totalCol; c++) {
            const result = explore(grid, r, c, visited);
            if ( result === true) {
              countOfIslands += 1;
            }
        }
    }
    return count;
}


const explore = (grid, row, col, visited) => {
    const rowInBounds = 0 <= row && row < grid.length;
    const colInBounds = 0 <= col && col < grid[0].length;

    if (!rowInBounds || !colInBounds) return false; // row and col should be in bounds

    if(grid[row][col] === 'W') return false; // if its Water don't process

    const pos = row + ',' + col;

    if (visited.has(pos)) return false; // if already visited don't process

    visited.add(pos); // if grid[row][col] === 'L' && not visited

    explore(grid, row - 1, col, visited); // check up
    explore(grid, row + 1, col, visited); // check down
    explore(grid, row, col - 1, visited); // check left
    explore(grid, row, col + 1, visited); // check right

    return true;
}

const count = islandCount(grid);

console.log({count})