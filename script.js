'use strict';

const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

for (let i = 0, len = week.length; i < len; i++) {
   let html = week[i];
   let now = new Date();
   let day = week[now.getDay() - 1];

   if (html == day) {
      html = html.bold();
      if (i > 4) {
         html = html.italics();
      }
   } else if (i > 4) {
      html = html.italics();
   }
   const p = document.createElement('p');
   p.innerHTML = html;
   document.body.appendChild(p);
}




   // выходные





/*let now = new Date();
let day = week[now.getDay() - 1].bold();
const p = document.createElement('p');
p.innerHTML = week[now.getDay() - 1].bold();
document.body.appendChild(p);*/