const router = require("express").Router();
const cartController = require("../controllers/cartController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/create/:id", cartController.createCart);
router.get("/:id",authMiddleware, cartController.getCartByUserId);
router.put("/add/:id", authMiddleware, cartController.addProductToCart);
router.put("/update/quantity/:id", authMiddleware, cartController.updateProductQuantity);
router.put("/remove/:id", authMiddleware, cartController.deleteProductFromCart);
router.put("/remove/all/:id", authMiddleware, cartController.deleteAllProductsFromCart);

module.exports = router;
