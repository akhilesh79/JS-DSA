const isPowerOfTwo = (n) => {
  let val = n / 2;
  if (val < 1) return false;
  else if (val == 1) return true;

  return isPowerOfTwo(val);
};

console.log(isPowerOfTwo(24));
