/*
    Say that you are a traveller on a 2D grid, You begin in the top-left corner
    and your goal is to travel to the bottom-right corner.
    You may only move down or right.

    In how many ways can you travel to the goal on a grid with dimentions m*n?

    Write function gridTraveller(m*n) returns count of ways

     gridTraveller(2,3) => 3


     S 0 0
     0 0 0
     0 0 E

     right right down
     right down right
     down right right


    S
    


     
*/

/*
    base cases gT(1,1) => 1
    gT(0, n) | gT(m, 0) => 0

    without memoization 
    Time: O(2^(m+n))
    Space: O(n+m)

    With memoization
    Time: O(2*(n+m))

*/

const gridTraveller  = (m, n, memo = {}) => {
    const key = m + ',' + n;
    if (key in memo) return memo[key];

    if (m === 0 || n === 0) return 0;
    if (m === 1 && n === 1) return 1;

    memo[key] = gridTraveller(m - 1, n, memo) + gridTraveller(m , n - 1, memo); 
    return memo[key];
}


console.log(gridTraveller(1, 1));
console.log(gridTraveller(2, 3));
console.log(gridTraveller(3, 2));
console.log(gridTraveller(3, 3));

console.log(gridTraveller(18, 18));
console.log(gridTraveller(18, 18));
