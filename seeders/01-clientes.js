'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('clientes', [{
      "dni": "21182840R",
      "nombre": "Jeniece Eaklee",
      "telefono": "5622530",
      "email": "jeaklee0@wp.com",
      "createdAt": "2021-09-11 06:37:56",
      "updatedAt": "2022-05-29 14:55:45"
    }, {
      "dni": "42487899E",
      "nombre": "Lucho Cordery",
      "telefono": "5104809",
      "email": "lcordery1@spotify.com",
      "createdAt": "2022-05-02 09:47:35",
      "updatedAt": "2021-12-03 09:48:23"
    }, {
      "dni": "66873607A",
      "nombre": "Lyndsey Willstrop",
      "telefono": "1473204",
      "email": "lwillstrop2@ibm.com",
      "createdAt": "2022-03-15 05:39:30",
      "updatedAt": "2022-05-15 17:37:28"
    }, {
      "dni": "85197129T",
      "nombre": "Jolie Stappard",
      "telefono": "9407918",
      "email": "jstappard3@1688.com",
      "createdAt": "2021-11-27 10:14:58",
      "updatedAt": "2021-07-01 09:00:28"
    }, {
      "dni": "31706768A",
      "nombre": "Evita Speck",
      "telefono": "6067227",
      "email": "especk4@ebay.com",
      "createdAt": "2022-01-30 13:16:41",
      "updatedAt": "2021-09-20 07:42:44"
    }, {
      "dni": "88989737T",
      "nombre": "Lela Thomton",
      "telefono": "1645403",
      "email": "lthomton5@blogs.com",
      "createdAt": "2021-09-22 06:55:20",
      "updatedAt": "2022-06-16 10:02:38"
    }, {
      "dni": "60036090H",
      "nombre": "Jeromy Morehall",
      "telefono": "8762779",
      "email": "jmorehall6@sourceforge.net",
      "createdAt": "2021-11-07 09:50:38",
      "updatedAt": "2022-02-21 13:57:05"
    }, {
      "dni": "35294162H",
      "nombre": "Nadine Buckie",
      "telefono": "9164948",
      "email": "nbuckie7@shinystat.com",
      "createdAt": "2022-01-13 14:49:53",
      "updatedAt": "2021-07-19 14:40:15"
    }, {
      "dni": "66347389W",
      "nombre": "Giffard Gretton",
      "telefono": "9116659",
      "email": "ggretton8@tmall.com",
      "createdAt": "2022-04-15 14:18:40",
      "updatedAt": "2021-08-17 07:07:28"
    }, {
      "dni": "83988989G",
      "nombre": "Justus Mingauld",
      "telefono": "4186438",
      "email": "jmingauld9@ustream.tv",
      "createdAt": "2022-05-25 01:50:06",
      "updatedAt": "2022-04-27 05:14:35"
    }, {
      "dni": "48981842F",
      "nombre": "Dania Greenway",
      "telefono": "8252290",
      "email": "dgreenwaya@rediff.com",
      "createdAt": "2021-11-09 09:39:34",
      "updatedAt": "2022-01-09 17:00:04"
    }, {
      "dni": "81001504N",
      "nombre": "Wallie Talkington",
      "telefono": "5871330",
      "email": "wtalkingtonb@msu.edu",
      "createdAt": "2021-12-03 10:12:30",
      "updatedAt": "2022-03-13 17:30:51"
    }, {
      "dni": "18389606W",
      "nombre": "Dina Stanyland",
      "telefono": "8371927",
      "email": "dstanylandc@google.ca",
      "createdAt": "2021-07-19 16:43:04",
      "updatedAt": "2021-08-19 03:46:14"
    }, {
      "dni": "54497535R",
      "nombre": "Edmund Keyson",
      "telefono": "2889305",
      "email": "ekeysond@webs.com",
      "createdAt": "2021-12-26 10:56:52",
      "updatedAt": "2022-01-19 16:21:48"
    }, {
      "dni": "33588729N",
      "nombre": "Mina Gavaghan",
      "telefono": "8934237",
      "email": "mgavaghane@jigsy.com",
      "createdAt": "2021-09-10 05:50:58",
      "updatedAt": "2021-07-10 13:29:56"
    }, {
      "dni": "98736105A",
      "nombre": "Letty End",
      "telefono": "4742772",
      "email": "lendf@tmall.com",
      "createdAt": "2021-09-08 16:13:58",
      "updatedAt": "2021-11-09 15:59:54"
    }, {
      "dni": "65814997Z",
      "nombre": "Annamarie Soppitt",
      "telefono": "5685214",
      "email": "asoppittg@shop-pro.jp",
      "createdAt": "2022-04-15 10:11:02",
      "updatedAt": "2021-10-03 11:15:37"
    }, {
      "dni": "74569653L",
      "nombre": "Stacee Davie",
      "telefono": "3975686",
      "email": "sdavieh@163.com",
      "createdAt": "2022-04-05 04:54:59",
      "updatedAt": "2021-10-05 12:31:13"
    }, {
      "dni": "14902242J",
      "nombre": "Willabella Kupis",
      "telefono": "1334562",
      "email": "wkupisi@hostgator.com",
      "createdAt": "2022-05-30 09:36:26",
      "updatedAt": "2021-09-27 18:37:36"
    }, {
      "dni": "89004685K",
      "nombre": "Blondell Broadis",
      "telefono": "1467053",
      "email": "bbroadisj@odnoklassniki.ru",
      "createdAt": "2022-03-04 09:21:57",
      "updatedAt": "2022-05-06 17:15:11"
    }], {});
    
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('clientes', null, {});
     
  }
};
