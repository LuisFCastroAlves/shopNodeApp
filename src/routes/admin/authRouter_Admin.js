const router = require("express").Router();
const authController = require("../../controllers/authController");

router.delete("/remove/:id", authController.deleteUserById)

module.exports = router;