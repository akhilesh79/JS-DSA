/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;
  let res = [-1, -1];

  // starting position
  while (l < r) {
    let mid = l + Math.floor((r - l) / 2);
    if (nums[mid] < target) l = mid + 1;
    else r = mid;
  }

  if (nums[r] == target) res[0] = r;

  // ending position
  l = 0;
  r = nums.length - 1;
  while (l < r) {
    let mid = l + Math.ceil((r - l) / 2);
    if (nums[mid] > target) r = mid - 1;
    else l = mid;
  }

  if (nums[r] == target) res[1] = r;

  return res;
};

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]
// Example 3:

// Input: nums = [], target = 0
// Output: [-1,-1]
