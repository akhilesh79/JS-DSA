/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  let start = 1;
  let end = n;
  while (start <= end) {
    let myGuess = start + Math.floor((end - start) / 2);
    let res = guess(myGuess);
    if (res == 0) return myGuess;
    else if (res < 0) end = myGuess - 1;
    else start = myGuess + 1;
  }

  return -1;
};

// Example 1:

// Input: n = 10, pick = 6
// Output: 6
// Example 2:

// Input: n = 1, pick = 1
// Output: 1
// Example 3:

// Input: n = 2, pick = 1
// Output: 1
