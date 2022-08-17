const express = require("express");
const router = express.Router();

const {
  signup,
  login,
  logout,
  current,
  setAvatar,
  verifyEmail,
  resendVerifyEmail,
} = require("../../controllers/users");
const { auth, upload } = require("../../middlewares");
const { controllerWrapper } = require("../../helpers");

router.post("/signup", controllerWrapper(signup));

router.get("/verify/:verificationToken", controllerWrapper(verifyEmail));
router.post("/verify", controllerWrapper(resendVerifyEmail));

router.post("/login", controllerWrapper(login));

router.get("/current", auth, controllerWrapper(current));
router.patch("/avatars", auth, upload.single("avatar"), setAvatar);

router.get("/logout", auth, controllerWrapper(logout));

module.exports = router;
