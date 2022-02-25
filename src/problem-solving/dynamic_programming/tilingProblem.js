/*

Tiling Problem

Difficulty Level : Easy
Last Updated : 20 Dec, 2021
Given a “2 x n” board and tiles of size “2 x 1”, 
count the number of ways to tile the given board using the 2 x 1 tiles. 
A tile can either be placed horizontally i.e., as a 1 x 2 tile or vertically i.e., as 2 x 1 tile. 

Examples: 

Input: n = 4

Output: 5

Explanation:

For a 2 x 4 board, there are 3 ways

All 4 vertical (1 way)
All 4 horizontal (1 way)
2 vertical and 2 horizontal (3 ways)
Input: n = 3

Output: 3

Explanation:

We need 2 tiles to tile the board of size  2 x 3.

We can tile the board using following ways

Place all 3 tiles vertically.
Place 1 tile vertically and remaining 2 tiles horizontally (2 ways)

*/

const tile = (n, memo = {}) => {
    if (n in memo) return memo[n];
    if (n <= 2 ) {
        return n;
    }

    const result =  tile(n-1) + tile(n-2);
    memo[n] = result;
    return memo[n];
}
console.log(tile(1));
console.log(tile(2));
console.log(tile(3));
console.log(tile(4));
console.log(tile(5));
console.log(tile(6));
console.log(tile(15));