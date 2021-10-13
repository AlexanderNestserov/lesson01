'use strict';

const appData = {
   title: '',
   screens: [],
   screenPrice: 0,
   adaptive: true,

   rollback: 10,

   fullPrice: 0,
   servicePercentPrice: 0,
   allServicePrices: 0,
   services: {},
   isText: function (text) {
      return !isNaN(text);
   },
   isNumber: function (num) {
      return !isNaN(parseFloat(num)) && isFinite(num);
   },
   asking: function () {
      do {
         appData.title = prompt("Your project name", "Calculating of layout");
      }
      while (appData.isText(appData.title));


      for (let i = 0; i < 2; i++) {
         let name;
         do {
            name = prompt("Your screens type(Simple,Complex, Interactive", "Simple");
         }
         while (appData.isText(name));

         let price = 0;

         do {
            price = +prompt("How much does this job cost?");
         }
         while (!appData.isNumber(price));
         appData.screens.push({ id: i, name: name, price: price });
      }

      appData.adaptive = confirm("Do you need an adaptive?");

      for (let i = 0; i < 2; i++) {
         let name;
         do {
            name = prompt("What another type of service do you want?");
         }
         while (appData.isText(name));

         let price = 0;

         do { price = prompt("How much will it cost?"); }
         while (!appData.isNumber(price));
         appData.services[name] = +price;
      }

   },
   addPrices: function () {
      for (let screen of appData.screens) {
         appData.screenPrice += screen.price;
      }
      for (let key in appData.services) {
         appData.allServicePrices += appData.services[key];
      }
   },
   getServicePercentPrice: function (a, b) {
      appData.servicePercentPrice = (a - (a * (b / 100)));
   },
   getFullPrice: function (a, b) {
      appData.fullPrice = a + b;
   },
   getTitle: function () {
      appData.title = appData.title.trim()[0].toUpperCase() + appData.title.trim().slice(1).toLowerCase();
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
      appData.asking();
      appData.addPrices();
      appData.getFullPrice(+appData.screenPrice, +appData.allServicePrices);
      appData.getServicePercentPrice(+appData.fullPrice, appData.rollback);
      appData.getTitle();
      appData.logger();
   },
   logger: function () {
      console.log(appData.fullPrice);
      console.log(appData.servicePercentPrice);
      console.log(appData.screens);
   }
};

appData.start();