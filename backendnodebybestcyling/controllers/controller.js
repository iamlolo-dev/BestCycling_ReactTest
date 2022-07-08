const { response } = require('express');

const newSubscription = (req, res = response) => {

    const { body } = req;

    const { name } = body;
    
    if ( name === '' || name.length < 3) {
        return res.json({
            status: 'app.ns.bad.user',
            msg: 'Usuario incorrecto.'
        });
    }

    res.json({
        status: 'ok',
        msg: 'New Subscription',
        data: body,
    })
};

const statusSubscription = (req, res = response) => {
    res.json({
        status: 'ok',
        msg: 'Status Subscription'
    })
};

module.exports = {
    newSubscription,
    statusSubscription,
};