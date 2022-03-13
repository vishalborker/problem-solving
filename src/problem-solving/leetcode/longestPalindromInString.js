var longestPalindromeInAString = function(str) {
    var biggestPalindrom = "";
    var len = str.length;

    if (len < 2) {
        return str;
    }

    var checkPalindrome = function(str, start, end) {
        while(str[start] === str[end] && start >=0 && end < len) {
            start--;
            end++;
        }

        current = str.substring(start + 1, end);
        if (current.length > biggestPalindrom.length) {
            biggestPalindrom = current;
        }
    }

    for(let start = 1;  start < str.length; start++) {
        checkPalindrome(str, start, start);
        checkPalindrome(str, start, start + 1);
    }

    return biggestPalindrom;
}

longestPalindromeInAString("abxo8oxbx")