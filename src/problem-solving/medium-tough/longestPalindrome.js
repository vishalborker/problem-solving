/*
    5. Longest Palindromic Substring
    Medium

    Given a string s, return the longest palindromic substring in s.
    Example 1:

    Input: s = "babad"
    Output: "bab"
    Explanation: "aba" is also a valid answer.
    Example 2:

    Input: s = "cbbd"
    Output: "bb"
    

    Constraints:

    1 <= s.length <= 1000
    s consist of only digits and English letters.

*/
/**
 * 
 * @param {string} str 
 */

/**
 * @param {string} s
 * @return {string}
 */

 var longestPalindrome = function(s) {
    if(s.length === 1) {
        return s;
    }
    var allPalindrom = [];
    var maxPalindrome = '';
    var sLen = s.length;

    count = 0;
    for (i = 0; i < sLen - 1; i++) {
        var j = sLen - 1;
        var pString = new Array(s.length);
        var k = i;
        let x = 0;
        let y = sLen - 1;
        while (k <= j) {
            count++;
            if (s[k] === s[j]) {
                pString[x++] = s[k];
                pString[j - i] = s[j];
                k++;
                j--;
            }
            else {
                pString = [];
                x = 0;
                k = i;
                y--;
                j = y;
            } 
        }

        if (pString.length > 1) {
            allPalindrom.push(pString);
            if (pString.length > maxPalindrome.length) {
                maxPalindrome = pString.join('');
            }
        }
    }
    return maxPalindrome.length === 0 ? s[0] : maxPalindrome;
};

result = longestPalindrome("bacabacababhsdflkshkwbhfwifibdylieufowiheufobuwiofeiowfuioufbwsif");





// result = longestPalindrome("bababxcacacx");

// console.log({result});

// result = longestPalindrome("a");

// console.log({result});

// result = longestPalindrome("ac");

// console.log({result});

// result = longestPalindrome("acbca");

// console.log({result});

// result = longestPalindrome("xxyxx");

// console.log({result});

// result = longestPalindrome("xxabcbaxx");

// console.log({result});



var longestPalindromeInAString = function (string) {
    if(string.length < 2) {
        return string;
    }

    
}