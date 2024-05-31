const productList = require("../db/productListFunc")

async function addProduct(req, res) {
    const params = req.body;
    const product = await productList.addProduct(params);
    res.json(product);
}

async function getProducts(req, res) {
    const products = await productList.getProducts();
    res.json(products);
}

async function getProductById(req, res) {
    const { id } = req.params;
    const product = await productList.getProductById(id);
    res.json(product);
}

async function deleteProductById(req, res) {
    const { id } = req.params;
    const product = await productList.deleteProductById(id);
    res.json(product);
}

async function updateProductById(req, res) {
    const { id } = req.params;
    const params = req.body;
    const product = await productList.updateProductById(id, params);
    res.json(product);
}

module.exports = {
    addProduct,
    getProducts,
    getProductById,
    deleteProductById,
    updateProductById
}