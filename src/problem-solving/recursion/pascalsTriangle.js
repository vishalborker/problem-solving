/**
 * 
 * 
 */

var pascalsTriangle = function (Row, Col) {
    var previousRow = [1];
    var pascal = [];
    pascal.push(previousRow);

    for (j = 1; j < Row; j++) {
        var currentRow = [];
        for(k = 0;k <= previousRow.length;k++) {
            currentRow[k] = (previousRow[k - 1] || 0)  + (previousRow[k] || 0)
        }
        previousRow = currentRow;

        console.log({previousRow});
        pascal.push(previousRow);
    }
    console.log({pascal});
    return previousRow[Col] || -1
}

const findRow = 3;
const findCol = 1; 
const result = pascalsTriangle(findRow, findCol);
console.log('At Row =>', findRow, 'Col => ', findCol,  {result})
