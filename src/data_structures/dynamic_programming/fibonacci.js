
/*
    const fibonacci = (n) => {
        if (n <=2) return 1;
        return fibonacci(n-1) + fibonacci(n-2);
    };
*/
// Not an optimal solution
// Time: O(2n)
// Space: O(n)

/*
                  6
         5                  4
    4          3      3      2
 3     2     2   1  2   1  1   0
2 1  1   0


for n = 6
function calls on stack = 2^6 O(2^n)

*/

// solution using memoization
// Time: O(2n)
// Space: O(n)

const fibonacci = (n, memo = {}) => {
    if (n in memo) return memo[n];
    if (n <=2) return 1;
    memo[n] = fibonacci(n-1, memo) + fibonacci(n-2, memo);
    return memo[n];
};

console.log(fibonacci(5));
console.log(fibonacci(6));
console.log(fibonacci(7));
console.log(fibonacci(10));
console.log(fibonacci(20));
console.log(fibonacci(30));
console.log(fibonacci(40));