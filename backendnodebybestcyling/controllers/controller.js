const { response } = require('express');
const dbUsers = require('../db/users');

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

const login = (req, res = response) => {

    const { user, password } = req.body;

    const userExist = dbUsers.find(ind => ind.user === user);

    if (userExist === undefined) {
        return res.json({
            status: 'error',
            msg: 'User not exist.'
        });
    }

    if (userExist.password === password) {

        const resUser = {...userExist};

        delete resUser.password;
        
        return res.json({
            status: 'ok',
            user: resUser,
        })
        
    } else {
        return res.json({
            status: 'error',
            msg: 'Password incorrect.'
        });
    }
}


module.exports = {
    newSubscription,
    statusSubscription,
    login,
};