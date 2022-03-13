/**
 * @param {number} n
 * @return {number}
 */
 var tribonacci = function(n, memo = {}) {
    if (n===0) {
        memo[n] = 0;
        return memo[n];
    }
    
    if (n<3) {
        memo[n] = 1;
        return memo[n];
    }
    
    if(memo[n]) {
        return memo[n];
    } else {
        memo[n] = tribonacci(n-3, memo)+ tribonacci(n-2, memo) + tribonacci(n-1, memo);
        return memo[n];
    }
     
};