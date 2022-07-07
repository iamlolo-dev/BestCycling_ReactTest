const { response } = require('express');

const newSubscription = (req, res = response) => {

    const { body } = req;

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