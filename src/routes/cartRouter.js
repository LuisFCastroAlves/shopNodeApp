/* IMPORTS */

// Express Router Function
const router = require("express").Router();

// Cart Controller Functions
const cartController = require("../controllers/cartController");

// Authentication Middleware Function
const authMiddleware = require("../middleware/authMiddleware");

/* Routes */

// GET USER CART [GET] => "/"
router.get("/",authMiddleware, cartController.getCartByUserId);

// ADD PRODUCT TO CART [PUT] => "/add"
router.put("/add", authMiddleware, cartController.addProductToCart);

// UPDATE PRODUCT QUANTITY [PUT] => "/update/quantity"
router.put("/update/quantity", authMiddleware, cartController.updateProductQuantity);

// DELETE PRODUCT FROM CART [PUT] => "/remove"
router.put("/remove", authMiddleware, cartController.deleteProductFromCart);

module.exports = router;
