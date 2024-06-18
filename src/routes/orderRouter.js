const router = require("express").Router();
const orderController = require("../controllers/orderController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/create/:id", authMiddleware, orderController.createOrder);
router.get("/all", authMiddleware, orderController.getAllOrders);
router.get("/user/:id", authMiddleware, orderController.getOrderByUserId);
router.get("/:id", authMiddleware, orderController.getOrderById);

module.exports = router;