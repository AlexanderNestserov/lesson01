//присвоение переменных
let title = "Lesson02";
let screens = "Simple, Complex, Interactive";
let screenPrice = 500;
let rollback = 40;
let fullPrice = 50;
let adaptive = true;
console.log(typeof title);//тип title
console.log(typeof fullPrice);//тип fullPrice
console.log(typeof adaptive);//тип adaptive
console.log(screens.length);//длина screens
console.log('Cost of dev screens' + ' ' + screenPrice + '$');//вывод строки с screenPrice
console.log('Cost of dev site' + ' ' + fullPrice + '$');//вывод строки с fullPrice
screens = screens.toLowerCase();//перевод строки к нижнему регистру
//console.log(screens);проверка
console.log(screens.split(''));//массив всех символов строки переменной screens
console.log(screens.split(', '));//массив всех слов стоки переменной screens
console.log(fullPrice * (rollback / 100) + '%');



