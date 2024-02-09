/* n starts to be printed for n rows */

/* if any either of left or right operator is string , then it will convert another one as string and joins them */
/* in case of "+" operators */

/* strings are immutable in javascript */

/* 
  1. unary operators will be apply on only one operands like
     ++a, --a, a++, a--, +a(converts and returns number),
     -a(convert to number and return after negate the value),
     typeof , !;
  2. entry controlled and exit controlled loop -> while and do-while
  3. type of normal string literals and string created using
     new String("krishna") is different , so === comp will be
     false.
*/


/* this is also know coersion */
function printNStars(n) {
  for (let row = 1; row <= n; row++) {
    let stars = "";
    for (let col = 1; col <= n; col++) {
      stars += "*";
    }
    console.log(stars);
  }
}

printNStars(10);
