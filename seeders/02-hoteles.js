'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
  
     await queryInterface.bulkInsert('hoteles',[{
      "nombre": "Mauv",
      "createdAt": "2021-10-06 18:20:38",
      "updatedAt": "2022-05-23 18:00:46"
    }, {
      "nombre": "Purple",
      "createdAt": "2022-03-11 01:52:46",
      "updatedAt": "2021-12-14 14:31:36"
    }, {
      "nombre": "Blue",
      "createdAt": "2022-04-23 18:18:55",
      "updatedAt": "2021-08-10 20:45:55"
    }, {
      "nombre": "Violet",
      "createdAt": "2021-11-18 07:59:07",
      "updatedAt": "2022-05-16 04:44:25"
    }, {
      "nombre": "Fuscia",
      "createdAt": "2021-10-23 19:34:07",
      "updatedAt": "2021-11-13 04:50:33"
    }, {
      "nombre": "Turquoise",
      "createdAt": "2022-05-29 01:21:19",
      "updatedAt": "2021-08-26 20:52:27"
    }, {
      "nombre": "Teal",
      "createdAt": "2021-10-02 00:13:27",
      "updatedAt": "2022-04-24 09:55:27"
    }, {
      "nombre": "Aquamarine",
      "createdAt": "2021-12-26 18:29:43",
      "updatedAt": "2022-01-16 17:00:31"
    }, {
      "nombre": "Fuscia",
      "createdAt": "2021-12-02 04:14:05",
      "updatedAt": "2022-04-19 22:02:43"
    }, {
      "nombre": "Crimson",
      "createdAt": "2022-05-06 09:41:41",
      "updatedAt": "2022-04-07 17:48:57"
    }, {
      "nombre": "Turquoise",
      "createdAt": "2021-10-13 04:28:01",
      "updatedAt": "2022-03-24 01:04:51"
    }, {
      "nombre": "Crimson",
      "createdAt": "2021-12-15 05:02:37",
      "updatedAt": "2021-12-09 15:59:08"
    }, {
      "nombre": "Goldenrod",
      "createdAt": "2022-01-29 19:51:26",
      "updatedAt": "2022-03-09 02:53:58"
    }, {
      "nombre": "Purple",
      "createdAt": "2021-09-26 08:11:53",
      "updatedAt": "2022-03-19 04:39:21"
    }, {
      "nombre": "Purple",
      "createdAt": "2021-08-29 09:57:45",
      "updatedAt": "2022-02-22 01:37:42"
    }, {
      "nombre": "Goldenrod",
      "createdAt": "2021-10-17 05:35:14",
      "updatedAt": "2021-09-13 23:34:06"
    }, {
      "nombre": "Maroon",
      "createdAt": "2022-06-13 10:56:12",
      "updatedAt": "2022-01-24 11:45:17"
    }, {
      "nombre": "Violet",
      "createdAt": "2021-08-14 02:29:51",
      "updatedAt": "2022-04-22 16:39:19"
    }, {
      "nombre": "Teal",
      "createdAt": "2022-05-26 13:42:09",
      "updatedAt": "2022-01-19 13:10:29"
    }, {
      "nombre": "Puce",
      "createdAt": "2022-04-20 21:19:46",
      "updatedAt": "2021-09-03 16:26:31"
    }]
    , {});
   
  },

  async down (queryInterface, Sequelize) {
    

     await queryInterface.bulkDelete('hoteles', null, {});
     
  }
};
