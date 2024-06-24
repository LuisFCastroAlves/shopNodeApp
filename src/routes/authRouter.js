const router = require("express").Router();
const authController = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/register", authController.userRegister);
router.post("/login", authController.userLogin);
router.put("/update/name", authMiddleware, authController.updateUserName);
router.put("/update/email", authMiddleware, authController.updateUserEmail);
router.put("/update/password", authMiddleware, authController.updateUserPassword);

module.exports = router;