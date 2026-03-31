let arr = [5, 4, 9, 1, 8];

const bubbleSort = (arr) => {
  const length = arr.length;
  for (let i = 0; i < length - 1; i++) {
    let isSwapped = false;
    for (let j = 0; j < length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSwapped = true;
      }
    }

    if (!isSwapped) break;
  }

  return arr;
};

console.log(bubbleSort(arr));
