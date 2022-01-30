/*
Write a function, islandCount, that takes in a grid containing Ws and Ls.
W represents water and L represents land. The function should return the number of islands on the grid,
An island is vertically or horizontalu connected region of land
*/

const grid = [
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'L', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W'],
]; 


const islandCount = (grid) => {
    const visited = new Set();
    let count = 0;
    for(let r = 0; r < grid.length; r++) {
        for(let c = 0; c < grid[0].length; c++) {
            const result = explore(grid, r, c, visited);

            console.log(`${result } when => row ${r} col ${c}`);
            if ( result === true) {
                count +=1;
            }
        }
    }
    return count;
}


const explore = (grid, row, col, visited) => {
    const rowInBounds = 0 <= row && row < grid.length;
    const colInBounds = 0 <= col && col < grid[0].length;

    if (!rowInBounds || !colInBounds) return false;

    if(grid[row][col] === 'W') return false;

    const pos = row + ',' + col;

    if (visited.has(pos)) return false;

    visited.add(pos);

    

    explore(grid, row - 1, col, visited); // check up
    explore(grid, row + 1, col, visited); // check down
    explore(grid, row, col - 1, visited); // check left
    explore(grid, row, col + 1, visited); // check right

    // console.log('Reached here When=>', row, col, visited);
    return true;
}

const count = islandCount(grid);

console.log({count});