/* IMPORTS */

// Express Router Function
const router = require("express").Router();

// Order Controller Functions
const orderController = require("../../controllers/orderController");

// Authentication Middleware Function
const authMiddleware = require("../../middleware/authMiddleware");

/* Routes */

// GET ORDER BY USER ID [GET] => "/user/:id"
router.get("/user/:id", authMiddleware, orderController.getOrderByUserId);

// GET ALL ORDERS [GET] => "/all"
router.get("/all", authMiddleware, orderController.getAllOrders);

// GET ORDER BY ID [GET] => "/:id"
router.get("/:id", authMiddleware, orderController.getOrderById);

// UPDATE ORDER BY ID [PUT] => "/update/:id"
router.put("/update/:id", authMiddleware, orderController.updateOrder);

// DELETE ORDER BY ID [DELETE] => "/delete/:id"
router.delete("/delete/:id", authMiddleware, orderController.deleteOrderById);

module.exports = router;