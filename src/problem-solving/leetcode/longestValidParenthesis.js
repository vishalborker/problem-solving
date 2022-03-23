/*

Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.

 

Example 1:

Input: s = "(()"
Output: 2
Explanation: The longest valid parentheses substring is "()".
Example 2:

Input: s = ")()())"
Output: 4
Explanation: The longest valid parentheses substring is "()()".
Example 3:

Input: s = ""
Output: 0
*/

/**
 * @param {string} s
 * @return {number}
 */
 var longestValidParentheses = function(s) {
    if(s === ""){
        return 0;
    }
    var validCount = 0;
    var leftCount = 0;
    
    var maxValidCount = 0;

    var validToBeConsidered = 0;
    
    for(i = 0; i < s.length; i++) {
        if(s[i] === "(") {
            leftCount++;
        } else {
            if (leftCount > 0) {
                validToBeConsidered++;
                leftCount--;
                validCount +=2;
            } else {
                validCount = 0;  
            }
        }

        if (validCount > maxValidCount) {
           maxValidCount = validCount;
        }
    }
    console.log({leftCount})
    return maxValidCount;
};

let result = longestValidParentheses("))))()())(((((())))))");
console.log({result});

result = longestValidParentheses("()(()");



console.log({result});