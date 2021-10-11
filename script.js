'use strict';

let n = 100;

use:
for (let i = 2; i <= n; i++) {

   for (let j = 2; j < i; j++) {
      if (i % j == 0) { continue use; }
   }
   console.log(i + " :Делители этого числа :1 и " + " " + i); // простое число
}