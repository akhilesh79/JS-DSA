/**
 * @param {string} s
 * @return {number}
 */

//  TC- O(n2)
// var lengthOfLongestSubstring = function (s) {
//     let maxlength = 0;
//     for (let i = 0; i < s.length; i++) {
//         let subs = '';
//         let length = 0
//         for (j = i; j < s.length; j++) {
//             if (subs.includes(s[j])) break;
//             subs = subs + s[j];
//             length = length + 1;
//             maxlength = Math.max(maxlength, length);
//         }
//     }

//     return maxlength;
// };

var lengthOfLongestSubstring = function (s) {
  let hash = new Map();
  let i = 0;
  let j = 0;
  let n = s.length;
  let maxSubs = 0;
  while (j < n) {
    if (hash.has(s[j]) && hash.get(s[j]) >= i) {
      // we encounter duplicate character inside window. shrink it to proper ith index
      let index = hash.get(s[j]);
      i = index + 1;
    }

    // means in current window we dont have this character, so add it inside window
    let length = j - i + 1;
    maxSubs = Math.max(maxSubs, length);
    hash.set(s[j], j);
    j++;
  }

  return maxSubs;
};

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
