/**
 * @param {string} s
 * @return {number}
*/


var lengthOfLongestSubstring = function(s) {
    if (s === "") {
        return 0
    }
    if (s.length === 1) {
        return 1;
    }
    var resultSet = null;

    var maxNonRepeatingSubStringLen = -1;

    for (let char = 0; char < s.length; char++) {
        var set = new Set();
        set.add(s[char]);
        j = char + 1;

        for (j = char + 1; j<s.length; j++) {
            if (set.has(s[j])) {
                break;
            } else {
                set.add(s[j]);
            }
        }
        if (set.size > maxNonRepeatingSubStringLen) {
            maxNonRepeatingSubStringLen = set.size;
            resultSet = set;
        }
    }
    var result = maxNonRepeatingSubStringLen === -1 ? 0 : maxNonRepeatingSubStringLen;

    console.log({result}, {resultSet});
    return [result, resultSet];
};

lengthOfLongestSubstring('abcabcbb');

lengthOfLongestSubstring('pwwkew');

lengthOfLongestSubstring('');