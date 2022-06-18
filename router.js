const router = require('express').Router();

// Importando las rutas definidas en routes.

const reservasRouter = require('./routes/reservaRoutes');

// Rutas
router.use('/reservas',reservasRouter);

module.exports = router;
