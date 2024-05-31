const router = require("express").Router();
const productController = require("../../controllers/productController");

router.post("/add", productController.addProduct);
router.get("/all", productController.getProducts);
router.get("/:id", productController.getProductById);
router.put("/update/:id", productController.updateProductById);
router.put("/remove/:id", productController.deleteProductById);

module.exports = router;