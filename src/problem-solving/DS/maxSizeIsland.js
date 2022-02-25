/*
Write a function, maxSizeIsland, that takes in a grid containing Ws and Ls.
W represents water and L represents land. The function should return the size of island with max size on the grid,
An island is vertically or horizontaly connected region of land
*/

const grid = [
    ['W', 'L', 'W', 'W', 'L'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'L', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W'],
];

const maxSizeIsland = (grid) => {
    let maxSize = 0;
    let coOrdinates = [];
    const visited = new Set();
    for(let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            const islandSize = explore(grid, row, col, visited);
            if(islandSize > maxSize) {
                maxSize = islandSize;
            }
        }
    }
    return maxSize;

}

const explore = (grid, row, col, visited) => {
    const rowInBounds = 0 <= row && row < grid.length;
    const colInBounds = 0 <= col && col < grid[0].length;

    if (!rowInBounds || !colInBounds) return 0;


    console.log('row => ', row, ' col => ', col)

    const key = `${row},${col}`;
    if (visited.has(key)) return 0;
    
    if (grid[row][col] === 'W') return 0;

    visited.add(key);

    let size = 1;

    size += explore(grid, row - 1, col, visited); // top
    size += explore(grid, row + 1, col, visited); // bottom

    size += explore(grid, row, col + 1, visited); // right
    size += explore(grid, row, col - 1, visited); // left
    
    return size;
}

const size = maxSizeIsland(grid);

console.log(size);