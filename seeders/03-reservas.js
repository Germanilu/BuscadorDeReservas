'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   
     await queryInterface.bulkInsert('reservas', [{
      "importe": 98,
      "fechaEntrada": "2021-12-27 13:21:10",
      "fechaSalida": "2022-02-24 23:04:36",
      "createdAt": "2022-04-12 23:39:07",
      "updatedAt": "2021-12-20 03:04:56",
      "hotelId": 21,
      "dni": "21182840R"
    }, {
      "importe": 223,
      "fechaEntrada": "2022-01-20 03:40:13",
      "fechaSalida": "2021-09-16 05:10:14",
      "createdAt": "2021-07-19 17:37:33",
      "updatedAt": "2022-02-25 12:45:29",
      "hotelId": 41,
      "dni":"42487899E"
    }, {
      "importe": 120,
      "fechaEntrada": "2021-10-20 11:22:40",
      "fechaSalida": "2021-11-07 15:40:55",
      "createdAt": "2021-11-07 21:46:33",
      "updatedAt": "2022-03-16 16:32:01",
      "hotelId": 51,
      "dni":"66873607A"
    }, {
      "importe": 161,
      "fechaEntrada": "2021-08-05 08:06:09",
      "fechaSalida": "2022-06-13 08:58:19",
      "createdAt": "2022-01-13 22:31:50",
      "updatedAt": "2022-04-17 13:30:42",
      "hotelId": 21,
      "dni": "85197129T"
    }, {
      "importe": 281,
      "fechaEntrada": "2022-05-23 20:47:14",
      "fechaSalida": "2021-09-21 12:10:15",
      "createdAt": "2022-03-17 16:55:01",
      "updatedAt": "2022-02-12 05:44:43",
      "hotelId": 121,
      "dni": "31706768A"
    }, {
      "importe": 151,
      "fechaEntrada": "2022-06-06 08:39:59",
      "fechaSalida": "2021-07-30 23:33:28",
      "createdAt": "2021-06-20 00:41:00",
      "updatedAt": "2022-04-28 03:07:38",
      "hotelId": 21,
      "dni": "88989737T"
    }, {
      "importe": 228,
      "fechaEntrada": "2022-03-03 00:29:44",
      "fechaSalida": "2021-12-23 12:27:09",
      "createdAt": "2022-05-03 05:13:27",
      "updatedAt": "2022-01-28 09:27:22",
      "hotelId": 11,
      "dni":"60036090H"
    }, {
      "importe": 79,
      "fechaEntrada": "2021-07-02 23:26:07",
      "fechaSalida": "2021-08-14 03:07:40",
      "createdAt": "2021-09-05 05:41:23",
      "updatedAt": "2021-10-20 17:19:39",
      "hotelId": 111,
      "dni": "35294162H"
    }, {
      "importe": 109,
      "fechaEntrada": "2022-02-14 21:59:21",
      "fechaSalida": "2022-01-03 00:46:20",
      "createdAt": "2021-12-05 20:43:24",
      "updatedAt": "2021-11-04 23:03:52",
      "hotelId": 111,
      "dni": "66347389W"
    }, {
      "importe": 121,
      "fechaEntrada": "2022-03-05 17:11:27",
      "fechaSalida": "2022-02-23 08:59:09",
      "createdAt": "2022-03-01 23:03:00",
      "updatedAt": "2021-12-12 11:16:54",
      "hotelId": 81,
      "dni": "83988989G"
    }, {
      "importe": 268,
      "fechaEntrada": "2022-04-06 19:30:33",
      "fechaSalida": "2021-12-19 15:07:54",
      "createdAt": "2021-09-15 01:39:25",
      "updatedAt": "2021-11-30 20:09:49",
      "hotelId": 41,
      "dni":  "48981842F"
    }, {
      "importe": 247,
      "fechaEntrada": "2021-10-04 15:21:51",
      "fechaSalida": "2022-04-01 05:48:28",
      "createdAt": "2021-08-27 03:53:06",
      "updatedAt": "2021-09-26 10:10:22",
      "hotelId": 41,
      "dni": "81001504N"
    }, {
      "importe": 159,
      "fechaEntrada": "2021-07-24 16:53:02",
      "fechaSalida": "2022-05-27 18:57:35",
      "createdAt": "2021-12-04 22:50:31",
      "updatedAt": "2021-11-02 02:56:46",
      "hotelId": 51,
      "dni": "18389606W"
    }, {
      "importe": 266,
      "fechaEntrada": "2022-04-30 18:01:22",
      "fechaSalida": "2021-11-22 18:01:46",
      "createdAt": "2021-09-29 10:11:25",
      "updatedAt": "2022-03-18 21:39:50",
      "hotelId": 61,
      "dni": "54497535R"
    }, {
      "importe": 218,
      "fechaEntrada": "2022-05-20 22:36:35",
      "fechaSalida": "2021-08-15 08:23:59",
      "createdAt": "2021-06-30 14:03:43",
      "updatedAt": "2021-06-21 00:04:18",
      "hotelId": 51,
      "dni": "33588729N"
    }, {
      "importe": 271,
      "fechaEntrada": "2021-06-30 18:16:24",
      "fechaSalida": "2021-10-13 07:59:53",
      "createdAt": "2021-07-01 16:38:12",
      "updatedAt": "2022-03-06 08:31:57",
      "hotelId": 41,
      "dni":  "98736105A"
    }, {
      "importe": 135,
      "fechaEntrada": "2021-07-21 09:16:57",
      "fechaSalida": "2021-08-08 00:42:27",
      "createdAt": "2021-12-09 20:00:07",
      "updatedAt": "2021-12-14 14:58:04",
      "hotelId": 31,
      "dni": "65814997Z"
    }, {
      "importe": 175,
      "fechaEntrada": "2021-11-25 11:44:23",
      "fechaSalida": "2022-03-26 16:26:37",
      "createdAt": "2021-07-08 07:56:39",
      "updatedAt": "2022-02-18 06:21:22",
      "hotelId": 1,
      "dni": "74569653L"
    }, {
      "importe": 269,
      "fechaEntrada": "2021-10-29 14:20:34",
      "fechaSalida": "2022-05-17 03:17:19",
      "createdAt": "2021-09-07 07:35:56",
      "updatedAt": "2021-11-11 00:18:36",
      "hotelId": 11,
      "dni": "14902242J"
    }, {
      "importe": 282,
      "fechaEntrada": "2022-05-05 07:05:49",
      "fechaSalida": "2022-03-21 15:01:18",
      "createdAt": "2021-10-01 23:17:34",
      "updatedAt": "2022-04-30 15:38:45",
      "hotelId": 21,
      "dni": "89004685K"
    }], {});
    
  },

  async down (queryInterface, Sequelize) {
    

      await queryInterface.bulkDelete('reservas', null, {});
     
  }
};
