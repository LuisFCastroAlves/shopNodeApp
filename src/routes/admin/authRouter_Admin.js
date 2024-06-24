const router = require("express").Router();
const authController = require("../../controllers/authController");
const authMiddleware = require("../../middleware/authMiddleware");

router.delete("/remove/:id", authMiddleware, authController.deleteUserById)
router.put("/update/name/:id", authMiddleware, authController.updateUserNameById);
router.put("/update/email/:id", authMiddleware, authController.updateUserEmailById);
router.put("/update/password/:id", authMiddleware, authController.updateUserPasswordById);

module.exports = router;