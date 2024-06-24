/* IMPORTS */

// Express Router Function
const router = require("express").Router();

// Product Controller Functions
const productController = require("../controllers/productController");

/* Routes */

// GET ALL PRODUCTS [GET] => "/all"
router.get("/all", productController.getProducts);

// GET PRODUCT BY ID [GET] => "/:id"
router.get("/:id", productController.getProductById);

module.exports = router;