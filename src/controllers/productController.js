/* IMPORTS */

// Products Functions
const productList = require("../db/productListFunc")

/* Controller Functions */

// ADD PRODUCT
async function addProduct(req, res) {
    const params = req.body;
    const product = await productList.addProduct(params);
    res.json(product);
}

//  GET PRODUCTS
async function getProducts(req, res) {
    const products = await productList.getProducts();
    res.json(products);
}

// GET PRODUCT BY ID
async function getProductById(req, res) {
    const { id } = req.params;
    const product = await productList.getProductById(id);
    res.json(product);
}

// DELETE PRODUCT BY ID
async function deleteProductById(req, res) {
    const { id } = req.params;
    const product = await productList.deleteProductById(id);
    res.json(product);
}

// UPDATE PRODUCT BY ID
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