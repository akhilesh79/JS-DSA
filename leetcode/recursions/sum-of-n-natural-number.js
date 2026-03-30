const sumOfNNaturalNumbers = (n) => {
  let sum = 0;
  if (n === 1) return 1;
  sum = n + sumOfNNaturalNumbers(n - 1);
  return sum;
};

console.log(sumOfNNaturalNumbers(10)); // 55
