/* IMPORTS */

// Express Router Function
const router = require("express").Router();

// Product Controller Functions
const productController = require("../../controllers/productController");

// Authentication Middleware Function
const authMiddleware = require("../../middleware/authMiddleware");

/* ROUTES */

// GET ALL PRODUCTS [GET] => "/all"
router.get("/all", authMiddleware, productController.getProducts);

// GET PRODUCT BY ID [GET] => "/:id"
router.get("/:id", authMiddleware, productController.getProductById);

// ADD PRODUCT [POST] => "/add"
router.post("/add", authMiddleware, productController.addProduct);

// UPDATE PRODUCT BY ID [PUT] => "/update/:id"
router.put("/update/:id", authMiddleware, productController.updateProductById);

// DELETE PRODUCT BY ID [DELETE] => "/remove/:id"
router.delete("/remove/:id", authMiddleware, productController.deleteProductById);

module.exports = router;