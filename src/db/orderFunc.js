const { ObjectId } = require('mongodb');
const { connectToDB } = require('./connectToDB');
const cartFunc = require('./cartFunc');
const { getProductById } = require('./productListFunc');

// CREATE ORDER
async function createOrder(id, params) {
    try {
        const orderList = await connectToDB('orders');
        const userCart = await cartFunc.getCartByUserId(id);
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
        await cartFunc.deleteAllProductsFromCart(id);
        return newOrder

    } catch (error) {
        console.error("Error:", error);
    }

}

// GET ORDERS BY USER ID
async function getOrderByUserId(id) {
    try {
        const orderList = await connectToDB('orders');
        const userOrders = await orderList.find({
            user_id_ref: ObjectId.createFromHexString(id)
        }).toArray();

        return userOrders;
    } catch (error) {
        console.error("Error:", error);
    }


}

// GET ORDER BY ID
async function getOrderById(id) {
    try {
        const orderList = await connectToDB("orders");
        const order = await orderList.findOne({
            _id: ObjectId.createFromHexString(id)
        });
        return order
    } catch (error) {
        console.error("Error:", error);
    }

}

// UPDATE ORDER
async function updateOrder(id, params) {
    try {
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
    } catch (error) {
        console.error("Error:", error);
    }

}

// DELETE ORDER BY ID
async function deleteOrderById(id) {
    try {
        const orderList = await connectToDB("orders");
        const order = await orderList.deleteOne(
            {
                _id: ObjectId.createFromHexString(id)
            }
        )
        return order;
    } catch (error) {
        console.error("Error:", error);
    }

}


module.exports = {
    createOrder,
    getOrderByUserId,
    getOrderById,
    updateOrder,
    deleteOrderById
}
