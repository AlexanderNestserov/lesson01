'use strict';
let title;
let screens;
let screenPrice;
let adaptive;

let rollback = 10;

let fullPrice;
let servicePercentPrice;
let allServicePrices;

let service1;
let service2;

const isNumber = function (num) {
   return !isNaN(parseFloat(num)) && isFinite(num);
};

const asking = function () {
   title = prompt("Your project name", "Calculating of layout");
   screens = prompt("Your screens type(Simple,Complex, Interactive", "Simple");
   do { screenPrice = prompt("How much does this job cost?"); }
   while (!isNumber(screenPrice));
   adaptive = confirm("Do you need an adaptive?");
};

const getServicePercentPrice = function (a, b) {
   return (a - (a * (b / 100)));
};

const getAllServicePrices = function () {
   let sum = 0;
   for (let i = 0; i < 2; i++) {
      let price = 0;
      if (i === 0) {
         service1 = prompt("What another type of service do you want?");
      } else if (i === 1) {
         service2 = prompt("What another type of service do you want?");
      }
      do { price = prompt("How much will it cost?"); }
      while (!isNumber(price));
      sum += +price;
   }
   return sum;
};

function getFullPrice(a, b) {
   return a + b;
}

const getTitle = function () {
   return title.trim()[0].toUpperCase() + title.trim().slice(1).toLowerCase();
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

asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice(+screenPrice, +allServicePrices);
servicePercentPrice = getServicePercentPrice(fullPrice, rollback);
title = getTitle();

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log(getRollbackMessage(fullPrice));

console.log('allServicePrices ', allServicePrices);

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