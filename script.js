'use strict';

let n = 100;

use:
for (let i = 2; i <= n; i++) {

   for (let j = 2; j < i; j++) {
      if (i % j == 0) { continue use; }
   }
   console.log(i + " :Делители этого числа :1 и " + " " + i); // простое число
}
//первое задание:
/*let arr = [];
arr = ['1234', '2345', '3456', '4567', '5678', '6789', '7891'];
let first = ['2', '4'];
for (let v of arr) {
   if (first.includes(String(v).charAt(0))) {
      console.log(v);
   }
}*/