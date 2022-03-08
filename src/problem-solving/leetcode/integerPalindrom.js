/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    //Solution using Integer to string conversion
    //     var str = String(x);
    //     var reverseStr = str.split('').reverse().join('')
    
    //     return Number(reverseStr) === x;
    if (x < 0) {
        return false
    }
    
    if (x === 0) {
        return true;
    }
    var reverse = 0;
    var maxPower = String(x).length - 1;
    for(let i = x; i > 0; i = Math.floor(i/10)) {
        var mod = i % 10;
        
        reverse = reverse + mod * Math.pow(10, maxPower);
        maxPower--;
    }
    return reverse === x;
};

result = isPalindrome(123);
console.log({result});

result = isPalindrome(12321);
console.log({result});

result = isPalindrome(1234321);
console.log({result});

result = isPalindrome(1);
console.log({result});

