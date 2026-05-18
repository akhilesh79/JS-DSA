/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (arr) {
  let l = 0;
  let r = arr.length - 1;
  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2);

    // check pair is in left
    if (arr[mid] == arr[mid - 1]) {
      // left side count
      let count = mid - 1 - l;
      if (count % 2 == 1) {
        // odd exist in left hand side
        r = mid - 2;
      } else {
        l = mid + 1;
      }
    } else if (arr[mid] == arr[mid + 1]) {
      // pair is in right
      let count = mid - l;
      if (count % 2 == 1) {
        // odd exist in left hand side
        r = mid - 1;
      } else {
        l = mid + 2;
      }
    } else {
      // mid will be our single element , if no pair exists
      return arr[mid];
    }
  }
};

// Example 1:

// Input: nums = [1,1,2,3,3,4,4,8,8]
// Output: 2
// Example 2:

// Input: nums = [3,3,7,7,10,11,11]
// Output: 10
