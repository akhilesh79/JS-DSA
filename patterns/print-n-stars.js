/* n starts to be printed for n rows */

/* if any either of left or right operator is string , then it will convert another one as string and joins them */
/* in case of "+" operators */

/* strings are immutable in javascript */


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
