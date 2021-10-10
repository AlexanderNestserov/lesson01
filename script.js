'use strict';

const appData = {
   title: '',
   screens: '',
   screenPrice: 0,
   adaptive: true,

   rollback: 10,

   fullPrice: 0,
   servicePercentPrice: 0,
   allServicePrices: 0,

   service1: '',
   service2: '',
   isNumber: function (num) {
      return !isNaN(parseFloat(num)) && isFinite(num);
   },
   asking: function () {
      appData.title = prompt("Your project name", "Calculating of layout");
      appData.screens = prompt("Your screens type(Simple,Complex, Interactive", "Simple");
      do { appData.screenPrice = +prompt("How much does this job cost?"); }
      while (!appData.isNumber(appData.screenPrice));
      appData.adaptive = confirm("Do you need an adaptive?");
   },
   getServicePercentPrice: function (a, b) {
      return (a - (a * (b / 100)));
   },
   getAllServicePrices: function () {
      let sum = 0;
      for (let i = 0; i < 2; i++) {
         let price = 0;
         if (i === 0) {
            appData.service1 = prompt("What another type of service do you want?");
         } else if (i === 1) {
            appData.service2 = prompt("What another type of service do you want?");
         }
         do { price = prompt("How much will it cost?"); }
         while (!appData.isNumber(sum));
         sum += +price;
      }
      return sum;
   },
   getFullPrice: function (a, b) {
      return +a + b;
   },
   getTitle: function () {
      return appData.title.trim()[0].toUpperCase() + appData.title.trim().slice(1).toLowerCase();
   },
   getRollbackMessage: function (price) {
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
   },
   start: function () {
      appData.title = prompt("Your project name", "Calculating of layout");
      appData.screens = prompt("Your screens type(Simple,Complex, Interactive", "Simple");
      do { appData.screenPrice = +prompt("How much does this job cost?"); }
      while (!appData.isNumber(appData.screenPrice));
      appData.adaptive = confirm("Do you need an adaptive?");
      appData.allServicePrices = appData.getAllServicePrices();
      appData.fullPrice = appData.getFullPrice(appData.screenPrice, appData.allServicePrices);
      appData.servicePercentPrice = appData.getServicePercentPrice(appData.fullPrice, appData.rollback);
      appData.title = appData.getTitle();
   },
   logger: function () {
      console.log(appData.fullPrice);
      console.log(appData.servicePercentPrice);
      for (let key in appData) {
         console.log(key);
      }
   }
};
appData.start();
appData.logger();


