function upperTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let str = "";
    let spaces = n - i;
    let stars = 2 * i - 1;

    for (let j = 1; j <= spaces; j++) {
      str += " ";
    }

    for (k = 1; k <= stars; k++) {
      str += "*";
    }

    console.log(str);
  }
}

function lowerTriangle(n) {
  for (let i = 1; i <= n - 1; i++) {
    let str = "";
    let spaces = i;
    let stars = 2 * (n - i) - 1;

    for (let j = 1; j <= spaces; j++) {
      str += " ";
    }

    for (let k = 1; k <= stars; k++) {
      str += "*";
    }

    console.log(str);
  }
}

function leftRightTriangle(n) {
  /* left triangle here we need to print stars
    which is equals to the current row */
  for (let row = 0; row < n; row++) {
    let stars = "";
    for (let col = 0; col <= row; col++) {
      stars += "*";
    }
    console.log(stars);
  }

  /* right side triangle */
  /* lets say this 3 rd row and n = 5 then spaces would be
   n-row means 5-3 2 and stars would be equal to row which is
   3 */

  for (let row = 1; row <= n; row++) {
    let stars = row;
    let spaces = n - row;
    let str = "";

    for (let j = 1; j <= spaces; j++) {
      str += " ";
    }

    for (let k = 1; k <= stars; k++) {
      str += "*";
    }
    console.log(str);
  }

  /* pascal triangle */
  for (let row = 1; row <= n; row++) {
    let stars = row;
    let spaces = n - row;
    let str = "";

    for (let j = 1; j <= spaces; j++) {
      str += " ";
    }

    for (let k = 1; k <= 2 * stars - 1; k++) {
      str += "*";
    }
    console.log(str);
  }

  /* reflection of left side triangle */
  for (let i = n; i > 0; i--) {
    let str = "";
    let stars = i;
    // let spaces = n - i;

    for (let j = 0; j < stars; j++) {
      str += "*";
    }

    // for (let k = 0; k < spaces; k++) {
    //   str += " ";
    // }

    console.log(str);
  }
}

leftRightTriangle(10);

/* diamond pattern */
function diamondPattern(n) {
  upperTriangle(n);
  lowerTriangle(n);
}

diamondPattern(10);


/*

*
**
***
****
*****
******
*******
********
*********
**********

         *
        **
       ***
      ****
     *****
    ******
   *******
  ********
 *********
**********

         *
        ***
       *****
      *******
     *********
    ***********
   *************
  ***************
 *****************
*******************

**********
*********
********
*******
******
*****
****
***
**
*
         *
        ***
       *****
      *******
     *********
    ***********
   *************
  ***************
 *****************
*******************
 *****************
  ***************
   *************
    ***********
     *********
      *******
       *****
        ***
         *

*/