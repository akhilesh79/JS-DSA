var reverse = function (x) {
  let intialNumber = x;

  x = Math.abs(x);
  let reverseNumber = 0;
  while (x > 0) {
    const remainder = x % 10;
    reverseNumber = 10 * reverseNumber + remainder;
    x = Math.floor(x / 10);
  }

  const result = intialNumber < 0 ? -reverseNumber : reverseNumber;
  const limit = Math.pow(2, 31);
  if (result < -limit || result > limit) return 0;
  return result;
};

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21
