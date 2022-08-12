const { Contact, addSchema } = require("../../models/contact");
const { createError } = require("../../helpers");

const updateById = async (req, res) => {
  const { error } = addSchema.validate(req.body);

  if (error) {
    throw createError(400, (error.message = "missing fields"));
  }

  const { id } = req.params;
  const result = await Contact.findByIdAndUpdate(id, req.body, { new: true });

  if (!result) {
    throw createError(404);
  }

  res.status(200).json(result);
};

module.exports = updateById;
