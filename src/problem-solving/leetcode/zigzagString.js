/*
6. Zigzag Conversion
Medium

3411

7900

Add to List

Share
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);
 

Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
Example 2:

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I
Example 3:

Input: s = "A", numRows = 1
Output: "A"
 

Constraints:

1 <= s.length <= 1000
s consists of English letters (lower-case and upper-case), ',' and '.'.
1 <= numRows <= 1000

*/

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */


var convert = function(s, numRows) {
    let column = 0;
    var fillers = numRows - 2;
    var map = {};

    var StringPtr = 0;
    while(StringPtr < s.length) {

        // adds col elements in specific row
        for(let j = 0; j < numRows; j++) {
            var sComponent = s[StringPtr];
            StringPtr++;
            if (sComponent) {
                key = `${j}, ${column}`
                map[key] = sComponent;
            }
        }
        column++;

        // add zigzag element
        if (fillers > 0) {
            let x = numRows - 1;
            for(let z = 0; z < fillers; z++) {
                var val = s[StringPtr];
                StringPtr++;
                if (val) {
                    key = `${x-1}, ${z+column}`
                    map[key] = val;
                    x--;
                }
            }
            column = column + fillers;
        }
    }

    // print Elements
    var finalString = '';
    for (let i= 0; i< numRows; i++) {
        for(let j=0; j< column; j++) {
            var key = `${i}, ${j}`
            if(map[key]) {
                finalString += map[key];
            }
        }
    }
    console.log({finalString});
    return finalString;
};

convert('PAYPALISHIRING', 5);