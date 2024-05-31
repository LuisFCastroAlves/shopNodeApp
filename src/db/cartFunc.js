const { ObjectId } = require('mongodb');
const { connectToDB } = require('./connectToDB');

// CREATE CART 
async function createCart(id) {
    try {
        const cartList = await connectToDB('cart');
        const newCart = await cartList.insertOne(
            {
                "user_id_ref": ObjectId.createFromHexString(id),
                "array_products": []
            }
        )
        return newCart
    } catch (error) {
        console.error("Error:", error);
    }
}

// GET CART BY USER ID
async function getCartByUserId(id) {
    try {
        const cartList = await connectToDB('cart');
        const userCart = await cartList.findOne({
            user_id_ref: ObjectId.createFromHexString(id)
        });

        return userCart;
    } catch (error) {
        console.error("Error:", error)
    }
}

// ADD PRODUCT TO CART [PREGUNTAR SI ES MEJOR USAR POST O PUT]
async function addProductToCart(id, params) {
    try {
        const userCart = await getCartByUserId(id);
        let array_products = userCart.array_products;

        let productFound = false;

        const objectProduct = {
            "product_id_ref": ObjectId.createFromHexString(params.product_id_ref),
            "quantity": params.quantity
        }

        if (array_products.length > 0) {
            array_products = array_products.map(product => {
                if (product.product_id_ref.equals(objectProduct.product_id_ref)) {
                    product.quantity += objectProduct.quantity;
                    productFound = true;
                    return product;
                }
                return product;
            });
        }

        if (!productFound) {
            array_products.push(objectProduct);
        }

        const cartList = await connectToDB('cart');
        const productAddedToCart = await cartList.updateOne({
            user_id_ref: ObjectId.createFromHexString(id)
        },
            {
                $set: { "array_products": array_products }
            }
        );

        return productAddedToCart;

    } catch (error) {
        console.error("Error:", error)
    }
}

// UPDATE THE QUANTITY OF A PRODUCT FROM CART
async function updateProductQuantity(id, params) {
    try {
        const userCart = await getCartByUserId(id);
        let array_products = userCart.array_products;

        const objectProduct = {
            "product_id_ref": ObjectId.createFromHexString(params.product_id_ref),
            "quantity": params.quantity
        }

        array_products = array_products.map(product => {
            if (product.product_id_ref.equals(objectProduct.product_id_ref)) {
                product.quantity = objectProduct.quantity;
                return product;
            } else {
                return product
            }
        })

        const cartList = await connectToDB('cart');
        const updateProductQuantity = await cartList.updateOne({
            user_id_ref: ObjectId.createFromHexString(id)
        },
            {
                $set: { "array_products": array_products }
            }
        );

        return updateProductQuantity;

    } catch (error) {
        console.error("Error:", error);
    }
}

// DELETE PRODUCT FROM CART
async function deleteProductFromCart(id, params) {
    try {

        const cartList = await connectToDB('cart');
        const deleteProduct = await cartList.updateOne(
            { user_id_ref: ObjectId.createFromHexString(id) },
            {
                $pull: {
                    "array_products": { "product_id_ref": params.product_id_ref }
                }
            }
        );

        return deleteProduct;

    } catch (error) {
        console.error("Error:", error);
    }
}

// DELETE ALL PRODUCTS FROM CART
async function deleteAllProductsFromCart(id) {
    const cartList = await connectToDB("cart");
    const deleteAllProducts = await cartList.updateOne(
        {
            user_id_ref: ObjectId.createFromHexString(id)
        },
        {
            $set: {
                "array_products": []
            }
        }
    )
    return deleteAllProducts
}

// DELETE CART BY USER ID
async function deleteCart(id) {
    try {
        const cartList = await connectToDB("cart");
        const cart = await cartList.deleteOne({
            "user_id_ref": ObjectId.createFromHexString(id)
        })

        return cart;
    } catch (error) {
        console.error("Error:", error);
    }
}


module.exports = {
    createCart,
    getCartByUserId,
    addProductToCart,
    updateProductQuantity,
    deleteProductFromCart,
    deleteAllProductsFromCart,
    deleteCart
}