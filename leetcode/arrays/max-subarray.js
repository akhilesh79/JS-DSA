var maxSubArray = function (nums) {
  let bestMax = -Infinity; // this has the largest sum seen so far anywhere in the array
  let currentMax = 0; // this is max sum of subarray at the end of current position
  let subStart;
  let subEnd;
  for (let i = 0; i < nums.length; i++) {
    if (currentMax == 0) startI = i;

    currentMax = currentMax + nums[i]; // for every element
    if (currentMax > bestMax) {
      //decide whether we need extend current subarray
      bestMax = currentMax;
      subStart = startI;
      subEnd = i;
    }

    if (currentMax < 0) {
      // or we need start new subArray;
      currentMax = 0;
    }
  }

  return { sum: bestMax, arr: nums.slice(subStart, subEnd + 1) };
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
