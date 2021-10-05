'use strict';
let r = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вc'];
let e = ['Sun', 'Mon', 'Tus', 'Wed', 'Thes', 'Fri', 'Sat'];
let lang;
while (lang != 'ru' && lang != 'en') {
   lang = prompt('введите язык "ru" или "en"');
   console.log(lang);
}
if (lang == 'ru') {
   console.log(r);
} else if (lang == 'en') {
   console.log(e);
} else {
   prompt('введите язык "ru" или "en"');
}