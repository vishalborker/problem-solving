/*
    Given a string containing digits from 2-9 inclusive, 
    return all possible letter combinations that the number could represent. 
    Return the answer in any order.

    A mapping of digit to letters (just like on the telephone buttons) is given below. 
    Note that 1 does not map to any letters.


    Example 1:

    Input: digits = "23"
    Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
    Example 2:

    Input: digits = ""
    Output: []
    Example 3:

    Input: digits = "2"
    Output: ["a","b","c"]

*/

const e = require("cors");


/**
 * @param {string} digits
 * @return {string[]}
 */
 var letterCombinations = function(digits) {
    if(digits.length === 0) {
        return [];
    }
    
    var map = {
        "2": ["a", "b", "c"],
        "3": ["d", "e", "f"],
        "4": ["g", "h", "i"],
        "5": ["j", "k", "l"],
        "6": ["m", "n", "o"],
        "7": ["p", "q", "r", "s"],
        "8": ["t", "u", "v"],
        "9": ["w", "x", "y", "z"],
    }
    
    if (digits.length === 1) {
        return map[digits];
    }
    
    var charArr = [];
    for (let j = 0; j <digits.length; j++) {
        if (j === 0) {
            map[digits[j]].forEach(letter => {
                charArr.push(letter);
            });
        } else {
            newRow = [];
            for (i=0; i<charArr.length; i++) {
                map[digits[j]].forEach(letter => {
                    letterI = charArr[i];
                    combination = letterI+letter;
                    newRow.push(combination);
                });
            }
            charArr = newRow;
        }
    }
    return charArr;
};

var Output = letterCombinations("79235");
// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

// INput = 296
//["awm","awn","awo","axm","axn","axo","aym","ayn","ayo","azm",
// "azn","azo","bwm","bwn","bwo","bxm","bxn","bxo","bym","byn","byo",
// "bzm","bzn","bzo","cwm","cwn","cwo",
// "cxm","cxn","cxo","cym","cyn","cyo","czm","czn","czo"]

console.log(Output);