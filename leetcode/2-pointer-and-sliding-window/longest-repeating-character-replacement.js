var characterReplacement = function (s, k) {
  let i = (j = 0);
  let map = new Map();
  map.set(s[0], 1); // in order to start
  let maxWS = 0;
  while (j < s.length) {
    if (isWindowValid(map, k)) {
      let length = j - i + 1;
      maxWS = Math.max(maxWS, length);

      // increase window size and update map;
      j++;
      map.set(s[j], (map.get(s[j]) || 0) + 1);
    } else {
      // decrease window size and increment i
      map.set(s[i], map.get(s[i]) - 1);
      i++;
    }
  }

  return maxWS;
};

let isWindowValid = function (map, k) {
  let values = map.values();
  let { totalSum, maxCount } = [...values].reduce(
    (acc, curr) => {
      acc.totalSum = acc.totalSum + curr;
      acc.maxCount = Math.max(acc.maxCount, curr);

      return acc;
    },
    { totalSum: 0, maxCount: 0 },
  );
  return totalSum - maxCount <= k;
};

// Example 1:

// Input: s = "ABAB", k = 2
// Output: 4
// Explanation: Replace the two 'A's with two 'B's or vice versa.
// Example 2:

// Input: s = "AABABBA", k = 1
// Output: 4
// Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
// The substring "BBBB" has the longest repeating letters, which is 4.
// There may exists other ways to achieve this answer too.
