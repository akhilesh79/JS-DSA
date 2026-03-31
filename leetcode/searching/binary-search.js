const arr = [-1, 0, 3, 5, 9, 12];

const binarySearch = (target) => {
  let startI = 0;
  let endI = arr.length - 1;
  for (; startI <= endI; ) {
    let mid = Math.floor((startI + endI) / 2);
    if (arr[mid] == target) {
      return mid;
    }
    if (arr[mid] > target) {
      endI = mid - 1;
    }
    if (arr[mid] < target) {
      startI = mid + 1;
    }
  }

  return -1;
};

console.log(binarySearch(12));
