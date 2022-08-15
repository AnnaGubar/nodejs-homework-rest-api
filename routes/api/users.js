const express = require("express");
const router = express.Router();

const {
  signup,
  login,
  logout,
  current,
  setAvatar,
} = require("../../controllers/users");
const { auth, upload } = require("../../middlewares");
const { controllerWrapper } = require("../../helpers");

router.post("/signup", controllerWrapper(signup));
router.post("/login", controllerWrapper(login));
router.get("/logout", auth, controllerWrapper(logout));
router.get("/current", auth, controllerWrapper(current));
router.patch("/avatars", auth, upload.single("avatar"), setAvatar);

module.exports = router;
