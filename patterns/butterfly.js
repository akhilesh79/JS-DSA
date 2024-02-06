function upperPortion(n) {
  for (let row = 1; row <= (n - 1) / 2; row++) {
    let str = "";
    let leftStars = row;
    let rightStars = row;
    let spaces = n - 2 * row;

    for (let i = 1; i <= leftStars; i++) {
      str += "*";
    }

    for (let j = 1; j <= spaces; j++) {
      str += " ";
    }

    for (let k = 1; k <= rightStars; k++) {
      str += "*";
    }

    console.log(str);
  }
}

function middlePortion(n) {
  let str = "";
  for (let mid = 1; mid <= n; mid++) {
    str += "*";
  }

  console.log(str);
}

function lowerPortion(n) {
  let totalRows = (n - 1) / 2;
  for (let row = 1; row <= totalRows; row++) {
    let str = "";
    let leftStars = totalRows - row + 1;
    let rightStars = totalRows - row + 1;
    let spaces = n - 2 * (totalRows - row + 1);

    for (let i = 1; i <= leftStars; i++) {
      str += "*";
    }

    for (let j = 1; j <= spaces; j++) {
      str += " ";
    }

    for (let k = 1; k <= rightStars; k++) {
      str += "*";
    }

    console.log(str);
  }
}

function printButterfly(n) {
  upperPortion(n);
  middlePortion(n);
  lowerPortion(n);
}

printButterfly(7);


/* 

*     *
**   **
*** ***
*******
*** ***
**   **
*     *

*/
