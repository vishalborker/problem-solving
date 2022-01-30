const bestSum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    let shortestCombination = null;
    
    for( let number of numbers) {
        const remainder = targetSum - number;
        const remainderCombination = bestSum(remainder, numbers, memo);
        if (remainderCombination !== null) {
            const combination = [...remainderCombination, number];
            memo[targetSum] = combination;
            if (shortestCombination === null || combination.length < shortestCombination.length ) {
                shortestCombination = combination;
            }
        }
    }
    memo[targetSum] = shortestCombination;
    return memo[targetSum];
};




console.log(bestSum(7, [2, 3, 4]));
console.log(bestSum(7, [2, 4, 1]));
console.log(bestSum(300, [7, 14]));

console.log(bestSum(300, [25]));