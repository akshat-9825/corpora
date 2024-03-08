const authController = require("../controllers/auth");

const { userVerification } = require("../middlewares/authMiddleware");

const router = require("express").Router();

router.post("/signup", authController.Signup);
router.post("/login", authController.Login);
router.delete("/delete", authController.Delete);
router.post("/", userVerification);
router.put("/update", authController.Modify);

module.exports = router;
