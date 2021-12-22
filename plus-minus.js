'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
*/

function plusMinus(arr) {
    const len = arr.length;
    let pos = 0, neg = 0, zero = 0;
    let posratio = 0, negratio = 0, zeroratio = 0;

    arr.forEach(num => {
        if (num === 0) {
            zero++;
        } else {
            num < 0 ? neg++ : pos++;
        }
    });
    posratio = (pos/len).toPrecision(6);
    negratio = (neg/len).toPrecision(6);
    zeroratio = (zero/len).toPrecision(6);

    process.stdout.write(posratio);
    process.stdout.write('\n');
    process.stdout.write(negratio);
    process.stdout.write('\n');
    process.stdout.write(zeroratio);

}

function main() {
    const n = parseInt(readLine().trim(), 10);
    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    plusMinus(arr);
}
