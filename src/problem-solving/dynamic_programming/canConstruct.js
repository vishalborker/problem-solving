/*
    Input: vishal, ["vi", "ab", "sh", "a", "al"];


    for (each str in ["vi", "ab", "sh", "a", "al"])

    check if str in prefix of vishal
    if (yes) => recursively call function after remove that prefix from targetString

*/

const canConstruct = (targetString, wordBank, memo = {}) => {
    if (targetString in memo) return memo[targetString];
    if (targetString === '') return true;
    for (let str of wordBank) {
        if (targetString.indexOf(str) === 0) {
            const suffix = targetString.slice(str.length);
            if (canConstruct(suffix, wordBank, memo) === true) {
                memo[targetString] = true;
                return memo[targetString];
            }
        }
    }
    memo[targetString] = false;
    return memo[targetString];
}


console.log(canConstruct('vishal', ["vi", "ab", "sh", "a", "al"]));
console.log(canConstruct('eeeeeeeeeeeeeeeeeeeef', ["e", "ee", "eee", "eeee", "a", 'ee']));
