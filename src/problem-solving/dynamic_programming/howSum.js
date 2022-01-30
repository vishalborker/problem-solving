const howSum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;
    
    for( let number of numbers) {
        const remainder = targetSum - number;
        const result = howSum(remainder, numbers, memo);
        if (result !== null) {
            result.push(number);
            memo[targetSum] = result;
            return memo[targetSum];
        }
    }
    memo[targetSum] = null;
    return memo[targetSum];
};




console.log(howSum(7, [2, 3, 4]));
console.log(howSum(7, [2, 4]));
console.log(howSum(300, [7, 14]));

console.log(howSum(300, [7, 6, 2, 14]));