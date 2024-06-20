const router = require("express").Router();
const cartController = require("../controllers/cartController");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/",authMiddleware, cartController.getCartByUserId);
router.put("/add", authMiddleware, cartController.addProductToCart);
router.put("/update/quantity", authMiddleware, cartController.updateProductQuantity);
router.put("/remove", authMiddleware, cartController.deleteProductFromCart);
router.put("/remove/all/:id", authMiddleware, cartController.deleteAllProductsFromCart);

module.exports = router;
