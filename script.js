'use strict';

let arr = [];
arr = ['1234', '2345', '3456', '4567', '5678', '6789', '7891'];
let first = ['2', '4'];
for (let v of arr) {
   if (first.includes(String(v).charAt(0))) {
      console.log(v);
   }
}