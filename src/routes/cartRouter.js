const router = require("express").Router();
const cartController = require("../controllers/cartController");

router.post("/create/:id", cartController.createCart);
router.get("/:id", cartController.getCartByUserId);
router.put("/add/:id", cartController.addProductToCart);
router.put("/update/quantity/:id", cartController.updateProductQuantity);
router.put("/remove/:id", cartController.deleteProductFromCart);

module.exports = router;