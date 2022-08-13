const express = require("express");
const router = express.Router();

const {controllerWrapper} = require("../../helpers");
const { signup,login } = require("../../controllers/users");

router.post("/signup", controllerWrapper(signup));
router.post("/login", controllerWrapper(login));

module.exports = router;
