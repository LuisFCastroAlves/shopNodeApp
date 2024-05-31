const router = require("express").Router();
const productController = require("../controllers/productController");

router.get("/all", productController.getProducts);
router.get("/:id", productController.getProductById);

module.exports = router;