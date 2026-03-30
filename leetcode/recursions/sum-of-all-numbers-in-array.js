let arr = [4, 5, 2, 6, 3, 0, 1];

const sumOfAllNumbers = (n) => {
  if (n == 1) return arr[n - 1];
  return arr[n - 1] + sumOfAllNumbers(n - 1);
};

console.log(sumOfAllNumbers(7));

const sumOfAllOddNumbers = (n) => {
  let isOdd = arr[n - 1] % 2 !== 0;
  if (n == 0) return 0;
  if (isOdd) {
    return arr[n - 1] + sumOfAllOddNumbers(n - 1);
  } else {
    return sumOfAllOddNumbers(n - 1);
  }
};

console.log(sumOfAllOddNumbers(7));
