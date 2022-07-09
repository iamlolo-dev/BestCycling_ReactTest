/*
    RUTAS DE Subs /auth
    host + /suscription/*
*/

const { Router } = require('express');

const router = Router();

const { newSubscription, statusSubscription, login } = require('../controllers/controller');

router.post('/new', newSubscription);

router.post('/login', login);

router.post('/status', statusSubscription);


module.exports = router;