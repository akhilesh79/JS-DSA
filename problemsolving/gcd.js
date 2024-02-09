// greatest common divisor easy approach;
/* 
  1. hieghest common factor of 2 numbers
  2. in case both are prime the ans will be 1.
*/

// normal way
function GCD(a, b) {
  let ans = 1;
  for (let i = 2; i <= Math.min(a, b); i++) {
    if (a % i === 0 && b % i === 0) {
      ans = i;
    }
  }
  console.log(ans);
}

// through while loop
function GcdWhile(a, b) {
  let ans = 1;
  let remainder;
  let min = Math.min(a, b);
  let max = Math.max(a, b);

  while (remainder != 0) {
    if (remainder === 1) break;

    remainder = max % min;
    if (remainder === 0) ans = min;

    max = min;
    min = remainder;
  }

  return ans;
}

// euclidean way of solving GCD
function euclidGcd(a, b) {
  let min = Math.min(a, b);
  let max = Math.max(a, b);

  let remainder = max % min;

  if (remainder === 0) {
    return min;
  } else if (remainder === 1) {
    // if both a and b are prime number
    // then 1 only will divide both, hence
    // 1 will gcd
    return 1;
  }

  return euclidGcd(min, remainder);
}

console.log(GcdWhile(105, 36));
