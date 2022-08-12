const { Contact} = require("../../models/contact");
const { createError } = require("../../helpers");

const removeById = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndRemove(id);

  if (!result) {
    throw createError(404);
  }

  res.status(200).json({
    message: "Book deleted",
  });
};

module.exports = removeById;
