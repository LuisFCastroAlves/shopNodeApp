const orderFunc = require('../db/orderFunc');

async function createOrder(req, res) {
    const {id} = req.params;
    const params = req.body;
    const order = await orderFunc.createOrder(id, params);
    res.json(order);
}

async function getOrderByUserId(req, res) {
    const {id} = req.params;
    const orders = await orderFunc.getOrderByUserId(id);
    res.json(orders);
}

module.exports = {
    createOrder,
    getOrderByUserId
}