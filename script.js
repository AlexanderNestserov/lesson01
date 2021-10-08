'use strict';
let title = prompt("Your project name");
let screens = prompt("Your screens type(Simple,Complex, Interactive");
let screenPrice = +prompt("How much does this job cost?");
let adaptive = confirm("Do you need an adaptive?");
let service1 = prompt("What another type of service do you want?");
let servicePrice1 = +prompt("How much will it cost?");
let service2 = prompt("What another type of service do you want?");
let servicePrice2 = +prompt("How much will it cost?");
let rollback = 10;
let fullPrice;
let servicePercentPrice;
let allServicePrices;

const getServicePercentPrice = function (a, b) {
   return a - (a * (b / 100));
};

const getAllServicePrices = function (a, b) {
   return a + b;
};

function getFullPrice(a, b) {
   return a + b;
}

const getTitle = function () {
   title = title.trim();
   title = title.toLowerCase();
   title = title[0].toUpperCase() + title.slice(1);
};

const showTypeOf = function (variable) {
   console.log(variable, typeof variable);
};

const getRollbackMessage = function (price) {
   if (price > 30000) {
      return "Your discount is 10%";
   }
   else if (price <= 30000 && price >= 15000) {
      return "Your discount is 5%";
   }
   else if (price < 15000 && price >= 0) {
      return "Your discount is 0%";
   }
   else {
      return "Your finger is wrong";
   }
};

getTitle();

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);
fullPrice = getFullPrice(screenPrice, allServicePrices);
servicePercentPrice = getServicePercentPrice(fullPrice, rollback);

console.log(getRollbackMessage(fullPrice));




//console.log(typeof title);
//console.log(typeof screenPrice);
//console.log(typeof adaptive);

console.log(screens);

//console.log(service1);
//console.log(servicePrice1);
//console.log(service2);
//console.log(servicePrice2);

//console.log(fullPrice);
//console.log(allServicePrices);
console.log(servicePercentPrice);
//console.log(screens.split(''));