const router = require('express').Router();

// Importando Routes

const reservasRouter = require('./routes/reservaRoutes');

// Rutas
router.use('/reservas',reservasRouter);

module.exports = router;
