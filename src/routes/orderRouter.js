/* IMPORTS */

// Express Router Function
const router = require("express").Router();

// Order Controller Functions
const orderController = require("../controllers/orderController");

// Authentication Middleware Function
const authMiddleware = require("../middleware/authMiddleware");

/* Routes */

// CREATE ORDER [POST] => "/create"
router.post("/create", authMiddleware, orderController.createOrder);

// GET ORDERS [GET] => "/all"
router.get("/all", authMiddleware, orderController.getOrderByUserIdToken);

// GET ORDER BY ID [GET] => "/:id"
router.get("/:id", authMiddleware, orderController.getOrderById);

module.exports = router;