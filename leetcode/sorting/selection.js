let arr = [7, 1, 5, 4, 3, 2];

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    // find min element index.
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }

    if (i !== minIndex) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }

  return arr;
};

console.log(selectionSort(arr));
