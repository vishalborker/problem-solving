/*Given a gold mine of n*m dimensions. Each field in this mine contains a positive integer which is the amount of gold in tons. 
Initially the miner is at first column but can be at any row. He can move only (right->,right up /,right down\) that is from a given cell, 
the miner can move to the cell diagonally up towards the right or right or diagonally down towards the right. Find out maximum amount of gold he can collect. 
Examples: 

Input : mat[][] = {{1, 3, 3},
                   {2, 1, 4},
                  {0, 6, 4}};
Output : 12 
{(1,0)->(2,1)->(1,2)}

Input: mat[][] = { {1, 3, 1, 5},
                   {2, 2, 4, 1},
                   {5, 0, 2, 3},
                   {0, 6, 1, 2}};
Output : 16
(2,0) -> (1,1) -> (1,2) -> (0,3) OR
(2,0) -> (3,1) -> (2,2) -> (2,3)

Input : mat[][] = {{10, 33, 13, 15},
                  {22, 21, 04, 1},
                  {5, 0, 2, 3},
                  {0, 6, 14, 2}};
Output : 83




*/

const grid = [
    [1, 3, 1, 5],
    [2, 2, 4, 1],
    [5, 0, 2, 3],
    [0, 6, 1, 2],
]

const goldMine = (grid) => {
    let maxGoldCollected = grid[0][0];
    
    // console.log(grid.length, grid[0].length);
    for(let m = 0; m < grid.length; m++) {
        const visited = new Set();
        const currentGold = exploreGold(grid, m, 0, visited);

        // console.log({currentGold});
        if (currentGold > maxGoldCollected) {
            maxGoldCollected = currentGold;
        }
    }
    return maxGoldCollected;
}

const exploreGold = (grid, row, col, visited) => {
    const rowInbounds = 0 <= row && row < grid.length;
    const colInbounds = 0 <= col && col < grid[0].length;
    
    if (!rowInbounds || !colInbounds) return 0;
    // const position = row + ',' + col
    // if (visited.has(position)) return 0;

    // visited.add(position);
    let currentSpotGold = grid[row][col];

    console.log({currentSpotGold}, {row}, {col})

    rightGold = exploreGold(grid, row, col + 1, visited); // go right ->
    rightUpGold = exploreGold(grid, row - 1, col + 1, visited); // go right up /
    rightDown = exploreGold(grid, row + 1, col + 1, visited); // go right down \

    console.log({currentSpotGold}, {rightGold}, {rightUpGold}, {rightDown});
    maxGold = currentSpotGold + Math.max(rightGold, Math.max(rightUpGold, rightDown));
    console.log({maxGold})
    return maxGold;
}

console.log(goldMine(grid));