/*
    RUTAS DE Usuarios / Auth
    host + /api/auth
*/

const { Router } = require('express');
const router = Router();

const { newSubscription, statusSubscription } = require('../controllers/auth');

router.post('/new', newSubscription);

router.post('/status', statusSubscription);


module.exports = router;