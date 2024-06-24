/* IMPORTS */

// Express Router Function
const router = require("express").Router();

// Admin Authentication Controller Functions
const authController = require("../../controllers/authController");

// Authentication Middleware Function
const authMiddleware = require("../../middleware/authMiddleware");

/* Routes */

// DELETE USER BY ID [DELETE] => "/remove/:id"
router.delete("/remove/:id", authMiddleware, authController.deleteUserById)

// UPDATE USER NAME BY ID [PUT] => "/update/name/:id"
router.put("/update/name/:id", authMiddleware, authController.updateUserNameById);

// UPDATE USER EMAIL BY ID [PUT] => "/update/email/:id"
router.put("/update/email/:id", authMiddleware, authController.updateUserEmailById);

// UPDATE USER PASSWORD BY ID [PUT] => "/update/password/:id"
router.put("/update/password/:id", authMiddleware, authController.updateUserPasswordById);

module.exports = router;