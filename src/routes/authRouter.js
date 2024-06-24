/* IMPORTS */

// Express Router Function
const router = require("express").Router();

// Authentication Controller Functions
const authController = require("../controllers/authController");

// Authentication Middleware Function
const authMiddleware = require("../middleware/authMiddleware");

/* Routes */

// REGISTER [POST] => "/register"
router.post("/register", authController.userRegister);

// LOGIN [POST] => "/login"
router.post("/login", authController.userLogin);

// UPDATE NAME [PUT] => "/update/name"
router.put("/update/name", authMiddleware, authController.updateUserName);

// UPDATE EMAIL [PUT] => "/update/name"
router.put("/update/email", authMiddleware, authController.updateUserEmail);

// UPDATE PASSWORD [PUT] => "/update/name"
router.put("/update/password", authMiddleware, authController.updateUserPassword);

module.exports = router;