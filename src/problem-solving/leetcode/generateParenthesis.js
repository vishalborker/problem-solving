/*

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 

Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
*/

const generateParanthesis = (n) => {
    const arrOfAnswers = [];
    let leftBracketCount = 0;
    let rightbracketCount = 0;
    let str = '';
    generate(arrOfAnswers, n, str, leftBracketCount, rightbracketCount);
    console.log({arrOfAnswers});
}

const generate = (arrOfAnswers, n, str, leftBracketCount, rightbracketCount) => {
    if (leftBracketCount === n && rightbracketCount === n) {
        arrOfAnswers.push(str);
        return;
    }

    if (leftBracketCount < n) {
        generate(arrOfAnswers, n, str+ "(", leftBracketCount+1, rightbracketCount)
    }

    if(rightbracketCount < leftBracketCount) {
        
        generate(arrOfAnswers, n, str + ")", leftBracketCount, rightbracketCount+ 1)
    }
}

generateParanthesis(3);