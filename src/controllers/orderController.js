const orderFunc = require('../db/orderFunc');

async function createOrder(req, res) {
    const  id  = req.userData.userId;
    const params = req.body;
    const order = await orderFunc.createOrder(id, params);
    res.json(order);
}

async function getAllOrders(req, res) {
    const orders = await orderFunc.getAllOrders();
    res.json(orders);
}

async function getOrderByUserId(req, res) {
    const {id} = req.params;
    const orders = await orderFunc.getOrderByUserId(id);
    res.json(orders);
}


async function getOrderByUserIdToken(req, res) {
    const  id  = req.userData.userId;
    const orders = await orderFunc.getOrderByUserId(id);
    res.json(orders);
}

async function getOrderById(req, res) {
    const {id} = req.params;
    const order = await orderFunc.getOrderById(id);
    res.json(order);
}

async function updateOrder(req, res) {
    const {id} = req.params;
    const params = req.body;
    const order = await orderFunc.updateOrder(id, params);
    res.json(order);
}

async function deleteOrderById(req, res) {
    const {id} = req.params;
    const order = await orderFunc.deleteOrderById(id);
    res.json(order);
}

module.exports = {
    createOrder,
    getAllOrders,
    getOrderByUserId,
    getOrderByUserIdToken,
    getOrderById,
    updateOrder,
    deleteOrderById
}