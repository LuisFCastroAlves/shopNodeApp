const router = require("express").Router();
const orderController = require("../controllers/orderController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/create", authMiddleware, orderController.createOrder);
router.get("/all", authMiddleware, orderController.getOrderByUserIdToken);
router.get("/:id", authMiddleware, orderController.getOrderById);

module.exports = router;