const express = require("express");
const router = express.Router();
const { controllerWrapper } = require("../../helpers");
const {
  getAll,
  getById,
  add,
  removeById,
  updateById,
  updateFavorite,
} = require("../../controllers/contacts");

router.get("/", controllerWrapper(getAll));
router.get("/:id", controllerWrapper(getById));
router.post("/", controllerWrapper(add));
router.delete("/:id", controllerWrapper(removeById));
router.put("/:id", controllerWrapper(updateById));
router.patch("/:id/favorite", controllerWrapper(updateFavorite));

module.exports = router;
