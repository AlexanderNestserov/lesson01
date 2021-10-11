'use strict';
/*let week = ['Sunday', 'Monday', 'Tusday', 'Wednesday', 'Thusday', 'Friday', 'Satarday'];


for (let i = 0; week.length > i; i++) {

   let html = week[i];
   if (i == 0) {
      html = html.italics();
   }
   wee.innerHTML = html;
   document.body.appendChild(wee);
}
let date = new Date();
let a=alert(date.getDay());*/
let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let wee = document.getElementByIdName('wee');
wee.innerHTML = week.join('<br>');

for (let i = 0; i < week.length; i++) {
   wee.innerHTML = week[i];
   if (week[i] == 'Понедельник') {
     wee. 
   }
}
