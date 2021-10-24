'use strict';

const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

for (let i = 0, len = week.length; i < len; i++) {

   let html = week[i];
   let now = new Date();
   let day = week[now.getDay()];

   if (html == day) {
      html = html.bold();
      if (week[i] == 'Saturday' || week[i] == 'Sunday') {
         html = html.italics();
      }
   } else if (week[i] == 'Saturday' || week[i] == 'Sunday') {
      html = html.italics();
   }
   const p = document.createElement('p');
   p.innerHTML = html;
   document.body.appendChild(p);
}
