'use strict';
let r = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вc'];
let e = ['Sun', 'Mon', 'Tus', 'Wed', 'Thes', 'Fri', 'Sat'];
let lang;
lang = prompt('введите язык "ru" или "en"');
while (lang != 'ru' && lang != 'en') {
   lang = prompt(' неверно введите язык "ru" или "en"');
   //console.log(lang);//проверка вывода
}
/*if (lang == 'ru') {
   console.log(r);
} else if (lang == 'en') {
   console.log(e);
} else {
   prompt('введите язык "ru" или "en"');
}*/ // через if без new Map; let lang;
/*switch (true) {
   case lang == 'ru':
      console.log(r);
      break;
   case lang == 'en':
      console.log(e);
      break;
}*/ // через switch без new Map; let lang;
let arr = new Map();
if (lang == 'ru') {
   arr.set(lang, r);
   console.log(arr.get(lang));
} else {
   arr.set(lang, e);
   console.log(arr.get(lang));
}