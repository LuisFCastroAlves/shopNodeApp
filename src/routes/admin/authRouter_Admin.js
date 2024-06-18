const router = require("express").Router();
const authController = require("../../controllers/authController");
const authMiddleware = require("../../middleware/authMiddleware");

router.delete("/remove/:id", authMiddleware, authController.deleteUserById)

module.exports = router;