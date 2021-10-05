'use strict';
let title = prompt("Your project name");
//console.log(title);проверка присвоения
let screens = prompt("Your screens type(Simple,Complex, Interactive");
//console.log(screens); проверка присвоения
let screenPrice = +prompt("How much does this job cost?");
//console.log(screenPrice);
let adaptive = confirm("Do you need an adaptive?");
//console.log(adaptive);
let service1 = prompt("What another type of service do you want?");
let servicePrice1 = +prompt("How much will it cost?");
let service2 = prompt("What another type of service do you want?");
let servicePrice2 = +prompt("How much will it cost?");
/*console.log(service1);
console.log(servicePrice1);
console.log(service2);
console.log(servicePrice2);проверка*/
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
//console.log(fullPrice);
let servicePercentPrice = Math.ceil(fullPrice - 20000.99);
console.log(servicePercentPrice);
switch (true) {
   case fullPrice > 30000:
      console.log("Your discount is 10%");
      break;
   case fullPrice <= 30000 && fullPrice >= 15000:
      console.log("Your discount is 5%");
      break;
   case fullPrice < 15000 && fullPrice >= 0:
      console.log("Your discount is 0%");
      break;
   default:
      console.log("Your finger is wrong");
}