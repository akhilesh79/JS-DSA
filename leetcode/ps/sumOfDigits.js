function sumOfDigits(n) {

  if(typeof n === "string") n = +n; // convert it to number  
  if (n < 0) n = -n; // to make it positive number

  let sum = 0;
  while (n > 0){
    let lastDigit = n%10;
    sum += lastDigit;

    n = Math.floor(n/10);
  }

  return sum;
}

console.log(sumOfDigits("-4136"));
