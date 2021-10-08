'use strict';
let title = prompt('введите имя функции');

const getEmptyFunc = function (a) {
   if (a == +a) {
      alert('введите строку,please');
   }

   a = a.trim();
   
   if (a.length > 30) {
      a = a.substring(31, -31);
      a += '...';
   }
   return a;
};
console.log(getEmptyFunc(title));