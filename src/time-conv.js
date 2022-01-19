'use strict';

const fs = require('fs');

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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    const timeArr = s.split(':');
    let hours = timeArr[0];
    const afterNoon = timeArr[2].substr(2, 2) === 'PM';

    if (afterNoon) {
        hours = hours == '12' ? '12' : `${12 + Number(hours)}`;
    } else {
        hours = hours == '12' ? '00' : hours;
    }
    const finalTime = [hours, timeArr[1], timeArr[2].substr(0, 2)];
    return finalTime.join(':');
}

function main() {
    const ws = fs.createWriteStream('test_gfg.txt');

    const s = readLine();

    const result = timeConversion(s);

    // ws.write(result + '\n');

    // ws.end();
}
