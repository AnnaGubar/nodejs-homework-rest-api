const express = require("express");
const router = express.Router();

const { signup,login,logout,current } = require("../../controllers/users");
const {auth} = require("../../middlewares");
const {controllerWrapper} = require("../../helpers");

router.post("/signup", controllerWrapper(signup));
router.post("/login", controllerWrapper(login));
router.get("/logout", auth, controllerWrapper(logout));
router.get("/current", auth, controllerWrapper(current));

module.exports = router;
