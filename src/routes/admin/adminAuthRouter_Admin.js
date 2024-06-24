/* IMPORTS */

// Express Router Function
const router = require("express").Router();

// Admin Authentication Controller Functions
const authController = require("../../controllers/admin/adminAuthController");

// Authentication Middleware Function
const authMiddleware = require("../../middleware/authMiddleware");

/* Routes */

// ADMIN REGISTER [POST] => "/register"
router.post("/register", authMiddleware, authController.adminRegister);

// ADMIN LOGIN [POST] => "/login"
router.post("/login", authController.adminLogin);

// DELETE ADMIN BY ID [DELETE] => "/remove/:id"
router.delete("/remove/:id", authMiddleware, authController.deleteAdminById)

// UPDATE ADMIN NAME [PUT] => "/update/name"
router.put("/update/name", authMiddleware, authController.updateAdminName);

// UPDATE ADMIN EMAIL [PUT] => "/update/email"
router.put("/update/email", authMiddleware, authController.updateAdminEmail);

// UPDATE ADMIN PASSWORD [PUT] => "/update/password"
router.put("/update/password", authMiddleware, authController.updateAdminPassword);

module.exports = router;