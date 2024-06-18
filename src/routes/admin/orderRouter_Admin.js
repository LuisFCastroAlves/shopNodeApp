const router = require("express").Router();
const orderController = require("../../controllers/orderController");
const authMiddleware = require("../../middleware/authMiddleware");

router.get("/user/:id", authMiddleware, orderController.getOrderByUserId);
router.get("/all", authMiddleware, orderController.getAllOrders);
router.get("/:id", authMiddleware, orderController.getOrderById);
router.put("/update/:id", authMiddleware, orderController.updateOrder);
router.delete("/delete/:id", authMiddleware, orderController.deleteOrderById);

module.exports = router;