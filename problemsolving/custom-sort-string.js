const customSortString = function (order, s) {
  let ans = "";

  const sCharCountObj = s.split("").reduce((acc, cur) => {
    if (acc[cur]) {
      acc[cur] += 1;
    } else {
      acc[cur] = 1;
    }

    return acc;
  }, {});

  for (let i = 1; i <= order.length; i++) {
    if (Object.keys(sCharCountObj).includes(order[i - 1])) {
      ans += order[i - 1].repeat(sCharCountObj[order[i - 1]]);
      delete sCharCountObj[order[i - 1]];
    }
  }

  for (let j = 1; j <= s.length; j++) {
    if (!ans.includes(s[j - 1])) {
      ans += s[j - 1].repeat(sCharCountObj[s[j - 1]]);
      delete sCharCountObj[s[j - 1]];
    }
  }

  return ans;
};

console.log(customSortString("bca", "abcd"));


/* 

Example 1:

Input: order = "cba", s = "abcd"
Output: "cbad"
Explanation: 
"a", "b", "c" appear in order, so the order of "a", "b", "c" should be "c", "b", and "a". 
Since "d" does not appear in order, it can be at any position in the returned string. "dcba", "cdba", "cbda" are also valid outputs.
Example 2:

Input: order = "cbafg", s = "abcd"
Output: "cbad"

*/
