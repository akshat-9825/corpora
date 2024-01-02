const {
  Signup,
  Login,
  Delete,
  Modify,
} = require("../controllers/AuthController");
const { userVerification } = require("../middlewares/AuthMiddleware");

const router = require("express").Router();

router.post("/signup", Signup);
router.post("/login", Login);
router.delete("/delete", Delete);
router.post("/auth", userVerification);
router.put("/update", Modify);

module.exports = router;
