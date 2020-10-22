/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    var start = 0; max = 0;
    var map = new Map();

    for (var i = 0; i < s.length; i++) {
        var char = s[i];

        if (map.get(char) >= start) {
            start = map.get(char) + 1;
        }
        if (i - start + 1 > max) {
            max = i - start + 1;
        }
    }
    console.log(max)
    return max;
};

lengthOfLongestSubstring("abcabcabc")
lengthOfLongestSubstring("bbbbb")
lengthOfLongestSubstring("pwwkew")
lengthOfLongestSubstring("")