/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let l = 0;
  let r = nums.length - 1;
  while (l <= r) {
    if (nums[l] <= nums[r]) return nums[l];

    let mid = l + Math.floor((r - l) / 2);
    if (nums[mid - 1] > nums[mid]) return nums[mid];

    // check for non-sorted side because we couldnt find inflection point, so sorted side will never have minimum element
    if (nums[l] > nums[mid]) r = mid - 1;
    else {
      l = mid + 1;
    }
  }
};

// Example 1:

// Input: nums = [3,4,5,1,2]
// Output: 1
// Explanation: The original array was [1,2,3,4,5] rotated 3 times.
// Example 2:

// Input: nums = [4,5,6,7,0,1,2]
// Output: 0
// Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.
// Example 3:

// Input: nums = [11,13,15,17]
// Output: 11
// Explanation: The original array was [11,13,15,17] and it was rotated 4 times.
