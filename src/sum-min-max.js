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
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
*/

function miniMaxSum(arr) {
    // Write your code here
    const len = arr.length;
    const maxBeg = len - 4;
    const maxEnd = len;

    const minBeg = 0;
    const minEnd = 4;

    arr.sort();

    const maxSumArr = arr.slice(maxBeg, maxEnd);
    const maxSum = maxSumArr.reduce((previousValue, currentValue) => previousValue + currentValue);

    const minSumArr = arr.slice(minBeg, minEnd);
    const minSum = minSumArr.reduce((previousValue, currentValue) => previousValue + currentValue);

    process.stdout.write(`${minSum}`);
    process.stdout.write(' ');
    process.stdout.write(`${maxSum}`);
}

function main() {
    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    miniMaxSum(arr);
}

