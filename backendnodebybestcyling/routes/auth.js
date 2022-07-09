/*
    RUTAS DE Subs /auth
    host + /suscription/*
*/

const { Router } = require('express');

const router = Router();

const { login, saveSubscription } = require('../controllers/controller');


router.post('/login', login);
router.put('/save', saveSubscription)



module.exports = router;