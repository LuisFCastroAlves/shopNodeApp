const { ObjectId } = require('mongodb');
const { connectToDB } = require('./connectToDB');

// GET ALL PRODUCTS
async function getProducts() {
    try {
        const productList = await connectToDB('product_list');
        const products = await productList.find({}).toArray();

        return products;
    } catch (error) {
        console.error("Error:", error)
    }
}

// GET PRODUCT BY ID
async function getProductById(id) {
    try {
        const productList = await connectToDB('product_list');
        const product = await productList.findOne({
            _id: ObjectId.createFromHexString(id)
        }).toArray();

        return product;
    } catch (error) {
        console.error("Error:", error)
    }
}

// DELETE PRODUCT BY ID
async function deleteProductById(id) {
    try {
        const productList = await connectToDB('product_list');

        const products = await productList.deleteOne({
            _id: ObjectId.createFromHexString(id)
        });

        return products
    } catch (error) {
        console.error("Error:", error)
    }
}

// UPDATE PRODUCT BY ID
async function updateProductById(id, params) {
    try {
        const productList = await connectToDB('product_list');

        const products = await productList.updateOne(
            {
                _id: ObjectId.createFromHexString(id)
            },
            {
                $set: params
            });

        return products;
    } catch (error) {
        console.error("Error:", error)
    }
}

module.exports = {
    getProducts,
    getProductById,
    deleteProductById,
    updateProductById
}