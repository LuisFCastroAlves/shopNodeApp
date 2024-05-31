const { ObjectId } = require('mongodb');
const { connectToDB } = require('./connectToDB');
const { getCartByUserId } = require('./cartFunc');
const { getProductById } = require('./productListFunc');

// CREATE ORDER
async function createOrder(id, params) {
    try {
        const orderList = await connectToDB('orders');
        const userCart = await getCartByUserId(id);
        const productsArray = await Promise.all(userCart.array_products.map(async (product) => {
            const productObject = {
                product: await getProductById(product.product_id_ref.toString()),
                quantity: product.quantity
            }
            return productObject
        }))
        const newOrder = await orderList.insertOne(
            {
                "user_id_ref": ObjectId.createFromHexString(id),
                "payment_method": params.payment_method,
                "payment_price": params.payment_price,
                "status": "pending",
                "address": params.address,
                "array_products": productsArray
            }
        )
        return newOrder

    } catch (error) {
        console.error("Error:", error);
    }

}

// GET ORDERS BY USER ID
async function getOrderByUserId(id) {
    const orderList = await connectToDB('orders');
    const userOrders = await orderList.find({
        user_id_ref: ObjectId.createFromHexString(id)
    }).toArray();

    return userOrders;

}

// GET ORDER BY ID
async function getOrderById(id) {
    const orderList = await connectToDB("orders");
    const order = await orderList.findOne({
        _id: ObjectId.createFromHexString(id)
    });
    return order
}

// UPDATE ORDER
async function updateOrder(id, params) {
    const orderList = await connectToDB("orders");
    const order = await orderList.updateOne(
        {
            _id: ObjectId.createFromHexString(id)
        },
        {
            $set: params,
        }
    )
    return order;
}

// DELETE ORDER BY ID
async function deleteOrderById(id) {
    const orderList = await connectToDB("orders");
    const order = await orderList.deleteOne(
        {
            _id: ObjectId.createFromHexString(id)
        }
    )
    return order;
}


module.exports = {
    createOrder,
    getOrderByUserId,
    getOrderById,
    updateOrder,
    deleteOrderById
}