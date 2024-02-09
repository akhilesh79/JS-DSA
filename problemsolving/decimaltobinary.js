function decimalToBinary(n) {
  let ans = "";

  while (n > 0) {
    if (n % 2 === 0) {
      //even and in this last digit will be 0
      ans = "0" + ans;
    } else {
      //odd and in this last digit will be 1
      ans = "1" + ans;
    }

    n = Math.floor(n / 2);
  }

  return ans;
}
console.log(decimalToBinary(5));

// direct way is Number(15).toString(2)
