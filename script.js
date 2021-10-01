let fact = 1;
let num = 266219;
let str = String(num);
let arr = str.split('');
//console.log(arr); проверка
for (let i = 0; i < arr.length; i++) {
   fact = fact * arr[i];
}
console.log(fact);
let three = fact ** 3;
//console.log(three);проверка 
let str2 = String(three);
console.log(str2[0], str2[1]);
