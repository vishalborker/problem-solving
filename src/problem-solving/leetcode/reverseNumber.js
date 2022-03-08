/*
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21
 

Constraints:

-231 <= x <= 231 - 1



*/

function reverse(x) {
    let reverse = 0;
    var count = String(Math.abs(x)).length - 1;

    for (let i = Math.abs(x); i > 0; i = Math.floor(i / 10)) {
        var mod = i%10;
        reverse = mod * Math.pow(10, count) + reverse;
        count--;
    }

    if(Math.pow(2, 31) < reverse)
      return 0;
    if( x<0 )
      return -reverse;

    return reverse;
};

console.log(reverse(720));
console.log(reverse(-720))