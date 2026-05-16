//1
for (let row = 1; row <= 6; row++) {
  let str = "";
  for (let i = 1; i <= row; i++) {
    str += `${i}`;
  }

  for (let j = row - 1; j > 0; j--) {
    str += `${j}`;
  }
  console.log(str);
}

/*

1
121
12321
1234321
123454321
12345654321  

*/

function printPattern(n) {
  //2
  for (let row = 1; row <= n; row++) {
    let str = "";
    let spaces = n - row;

    for (let i = 1; i <= spaces; i++) {
      str += " ";
    }

    //now pascal
    for (let j = 1; j <= 2 * row - 1; j++) {
      if (j === 1 || j === 2 * row - 1) {
        str += "*";
      } else str += " ";
    }

    console.log(str);
  }

  //3
  for (let row = 1; row <= n; row++) {
    let str = "";
    let spaces = 2 * (row - 1);
    let leftStars = n - row + 1;
    let rightStars = n - row + 1;

    for (let i = 1; i <= leftStars; i++) {
      str += "*";
    }

    for (let j = 1; j <= spaces; j++) {
      str += " ";
    }

    for (let i = 1; i <= rightStars; i++) {
      str += "*";
    }

    console.log(str);
  }

  //4
  let printValue = n;
  for (let row = 1; row <= n; row++) {
    let str = "";
    for (let i = 1; i <= row; i++) {
      if (i === row) {
        str += `${printValue}`;
      } else str += " ";
    }

    for (let j = 1; j <= 2 * (n - row) - 1; j++) {
      str += " ";
    }

    // for last row we need to elimeinate 2 times 1
    if (printValue != 1) str += `${printValue}`;

    printValue--;
    console.log(str);
  }
}

printPattern(6);

function upperPortion(n) {
  let totalRows = (n - 1) / 2;
  for (let row = 1; row <= totalRows; row++) {
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
  for (let i = 1; i <= n; i++) {
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
    let spaces = 2 * row - 1;

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

_____*
____*_*
___*___*
__*_____*
_*_______*
*_________*


************
*****  *****
****    ****
***      ***
**        **
*          *

4     4
 3   3
  2 2
   1

*     *
**   **
*** ***
*******
*** ***
**   **
*     *

*/
