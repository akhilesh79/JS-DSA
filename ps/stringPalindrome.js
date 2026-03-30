var checkPalindrome = (a, b) => {
  let concatBothString = a + b;
  if (concatBothString === concatBothString?.split("").reverse().join("")) {
    return true;
  } else return false;
};
// reverse method is applied on only arrays

var checkPalindromeFormation = function (a, b) {
  const length = a.length;
  let isPalindrome = false;
  for (let i = 0; i < length; i++) {
    let aPrefix = a.slice(0, i);
    let aSuffix = a.slice(i);
    let bPrefix = b.slice(0, i);
    let bSuffix = b.slice(i);

    const checkFirstComb = checkPalindrome(aPrefix, bSuffix);
    const checkSecondComb = checkPalindrome(bPrefix, aSuffix);

    if (checkFirstComb || checkSecondComb) {
      isPalindrome = true;
      break;
    }
  }

  if (isPalindrome) return true;
  else return false;
};

// this solution is fine but its taking time exceeding factor is there 


// to optimise the solution 
var checkPalindromeFormation = function(a, b) {
    const checkPalindrome = (a, b) => {
        let left = 0;
        let right = a.length - 1;

        while (left < right && a[left] === b[right]) {
            left += 1;
            right -= 1;
        }
        return isPalindrome(a, left, right) || isPalindrome(b, left, right)
    };

    const isPalindrome = (str, left, right) => {
        while (left < right && str[left] === str[right]) {
            left += 1;
            right -= 1;
        }
        return left >= right;
    }

    return checkPalindrome(a, b) || checkPalindrome(b, a);
};

const result = checkPalindromeFormation("ulacfd", "jizalu");
console.log(result);
