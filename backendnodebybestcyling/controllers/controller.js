const { response } = require('express');
const dbUsers = require('../db/users');

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

        const resUser = { ...userExist };

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

const saveSubscription = (req, res = response) => {

    const { id, subscription } = req.body;

    const userExist = dbUsers.find(user => user.id === id);

    if (userExist === undefined) {
        return res.json({
            status: 'error',
            msg: 'User not exist.'
        });
    };

    if (userExist) {
        userExist.subscription = subscription;
        return res.json({
            status: 'ok',
            msg: 'Subscription saved.'
        });
    };
}

module.exports = {
    login,
    saveSubscription
};