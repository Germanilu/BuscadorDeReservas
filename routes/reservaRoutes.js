const express = require('express');
const router = express.Router();

//Importo modelo de datos
const reservaController = require('../controllers/reservaController');

// End-points CRUD Reservas
router.get('/', reservaController.getAll);
router.get('/:id', reservaController.getById);
router.get('/dnicliente/:dni', reservaController.getByDniCliente);
// router.get('/telefono/:telefono', reservaController.getByTelefono);
// router.get('/email/:email', reservaController.getByEmail);
router.get('/hotel/:hotelId', reservaController.getByHotelId);
router.get('/entrada/:fechaEntrada', reservaController.getByFechaEntrada);
router.get('/salida/:fechaSalida', reservaController.getByFechaSalida);




module.exports = router;