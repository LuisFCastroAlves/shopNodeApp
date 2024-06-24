const router = require("express").Router();
const productController = require("../../controllers/productController");
const authMiddleware = require("../../middleware/authMiddleware");

router.get("/all", authMiddleware, productController.getProducts);
router.get("/:id", authMiddleware, productController.getProductById);
router.post("/add", authMiddleware, productController.addProduct);
router.put("/update/:id", authMiddleware, productController.updateProductById);
router.delete("/remove/:id", authMiddleware, productController.deleteProductById);

module.exports = router;