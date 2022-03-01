/*
    Find minimum number of coins that make a given value
    
    Given a value V, if we want to make a change for V cents, and we have an infinite supply of each of C = { C1, C2, .., Cm} valued coins, what is the minimum number of coins to make the change? If it’s not possible to make a change, print -1.

    Examples:  

    Input: coins[] = {25, 10, 5}, V = 30
    Output: Minimum 2 coins required
    We can use one coin of 25 cents and one of 5 cents 

    Input: coins[] = {9, 6, 5, 1}, V = 11
    Output: Minimum 2 coins required
    We can use one coin of 6 cents and 1 coin of 5 cents
*/

const findMinCoins = (coins, value) => {
    if (Value ===0) return 0;
    let bestSolution = [];
    let solution = [];
    for(coin of coins) {
        solution = findCoins(coins, value - coin);
        console.log(solution);
    }
    // }
}

/*
        V = 30
       /
    30-25 = 5
    /
   5 - 25 = -20
 /
null
*/


const findCoins = (coins, value) => {
    if (value < 0) return null;
    if (value ===0) return [];

    for(let i = 0; i< coins.length; i++) {
        const remainder = value - coins[i];
        const solution = findCoins(coins, remainder);
        if( solution!= null) {
            solution.push(coins[i]);
            return solution;
        }
    }
    return null;
}

const coins = [25, 10, 50];
const Value = 30;

findMinCoins(coins, Value);