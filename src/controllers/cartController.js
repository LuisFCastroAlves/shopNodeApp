const cartFunc = require("../db/cartFunc");

async function createCart(req, res) {
    const { id } = req.params;
    const user_cart = await cartFunc.createCart(id);
    res.json(user_cart);
}

async function getCartByUserId(req, res) {
    const  id  = req.userData.userId;
    const user_cart = await cartFunc.getCartByUserId(id);
    res.json(user_cart);
}

async function addProductToCart(req, res) {
    const  id  = req.userData.userId;
    const params = req.body;
    const user_cart = await cartFunc.addProductToCart(id, params);
    res.json(user_cart);
}

async function updateProductQuantity(req, res) {
    const  id  = req.userData.userId;
    const params = req.body;
    const user_cart = await cartFunc.updateProductQuantity(id, params);
    res.json(user_cart);
}

async function deleteProductFromCart(req, res) {
    const  id  = req.userData.userId;
    const params = req.body;
    const user_cart = await cartFunc.deleteProductFromCart(id, params);
    res.json(user_cart);
}

async function deleteAllProductsFromCart(req, res) {
    const  id  = req.userData.userId;
    const user_cart = await cartFunc.deleteAllProductsFromCart(id);
    res.json(user_cart);
}

module.exports = {
    createCart,
    getCartByUserId,
    addProductToCart,
    updateProductQuantity,
    deleteProductFromCart,
    deleteAllProductsFromCart
}