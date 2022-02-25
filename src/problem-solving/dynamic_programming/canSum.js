const canSum = (targetSum, numbers, memo = {}) => {
    const allZeros = numbers.every(number => number === 0)
    if (allZeros) return false;
    if (targetSum === 0) return true;
    if (targetSum < 0) return false;

    for (let number of numbers) {
        remainder = targetSum - number;
        if (canSum(remainder, numbers) === true) {
          memo[targetSum] = true;
          return memo[targetSum];
        }
    }

    memo[targetSum] = false;
    return memo[targetSum];
};

console.log(canSum(7, [7, 3, 4, 2]));
console.log(canSum(7, [2, 4]));
console.log(canSum(21, [0, 0]));
console.log(canSum(300, [2, 3, 4,7]));
