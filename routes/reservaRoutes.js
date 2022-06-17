const express = require('express');
const router = express.Router();

//Importo modelo de datos
const ReservaController = require('../controllers/ReservaController');

// End-points CRUD Reservas
router.get('/', reservaController.getAll);
router.get('/:id', reservaController.getById);
router.get('/cliente/:dni', reservaController.getByDniCliente);
router.get('/telefono/:telefono', reservaController.getByTelefono);
router.get('/email/:email', reservaController.getByEmail);
router.get('/hotel/:hotelId', reservaController.getByHotelId);
router.get('/fechaEntrada', reservaController.getByFechaE);
router.get('/fechaSalida', reservaController.getByFechaS);




module.exports = router;