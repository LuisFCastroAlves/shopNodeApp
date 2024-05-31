const router = require("express").Router();
const orderController = require("../controllers/orderController");

router.post("/create/:id", orderController.createOrder);
router.get("/:id", orderController.getOrderByUserId)

module.exports = router;