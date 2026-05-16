/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x == 0 || x == 1) return x;
  let start = 2;
  let end = Math.floor(x / 2);
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let squareOfMid = mid * mid;
    if (squareOfMid == x) {
      return mid;
    }

    if (squareOfMid > x) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return end;
};

// Example 1:

// Input: x = 4
// Output: 2
// Explanation: The square root of 4 is 2, so we return 2.
// Example 2:

// Input: x = 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
