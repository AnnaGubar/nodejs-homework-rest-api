const express = require("express");
const { auth } = require("../../middlewares");
const { controllerWrapper } = require("../../helpers");
const {
  getAll,
  getById,
  add,
  removeById,
  updateById,
  updateFavorite,
} = require("../../controllers/contacts");
const router = express.Router();

router.get("/", auth, controllerWrapper(getAll));
router.get("/:id", auth, controllerWrapper(getById));
router.post("/", auth, controllerWrapper(add));
router.delete("/:id", auth, controllerWrapper(removeById));
router.put("/:id", auth, controllerWrapper(updateById));
router.patch("/:id/favorite", auth, controllerWrapper(updateFavorite));

module.exports = router;
