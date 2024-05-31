const router = require("express").Router();
const orderController = require("../controllers/orderController");

router.post("/create/:id", orderController.createOrder);
router.get("/user/:id", orderController.getOrderByUserId);
router.get("/:id", orderController.getOrderById);
router.put("/update/:id", orderController.updateOrder);
router.delete("/delete/:id", orderController.deleteOrderById);

module.exports = router;