function checkPalindrome(n) {
  let originalNumber = n;
  let reverseNumber = 0;

  while (n > 0) {
    let lastDigit = n % 10;
    reverseNumber = reverseNumber * 10 + lastDigit;

    n = Math.floor(n / 10);
  }

  if (reverseNumber === originalNumber) {
    console.log("Number entered is palindrome");
  } else console.log("Not a palindrome");
}


function checkArmstrong(n){
    let sum = 0
    let originalNumber = n;
    const lengthOfDigit = String(n).length;

    while(n>0){
        let lastDigit = n % 10;
        sum += Math.pow(lastDigit, lengthOfDigit);

        n = Math.floor(n/10);
    }

    if(sum === originalNumber){
        console.log("Number entered is Armstrong");
    } else console.log("Not a Armstrong");
}

checkPalindrome(9);
checkArmstrong(1634);
