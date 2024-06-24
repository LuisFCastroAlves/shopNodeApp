const router = require("express").Router();
const authController = require("../../controllers/admin/adminAuthController");
const authMiddleware = require("../../middleware/authMiddleware");

router.post("/register", authMiddleware, authController.adminRegister);
router.post("/login", authController.adminLogin);
router.delete("/remove/:id", authMiddleware, authController.deleteAdminById)
router.put("/update/name", authMiddleware, authController.updateAdminName);
router.put("/update/email", authMiddleware, authController.updateAdminEmail);
router.put("/update/password", authMiddleware, authController.updateAdminPassword);

module.exports = router;