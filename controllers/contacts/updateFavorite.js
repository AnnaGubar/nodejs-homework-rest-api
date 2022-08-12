const { Contact, updateFavoriteSchema } = require("../../models/contact");
const { createError } = require("../../helpers");

const updateFavorite = async (req, res) => {
  const { error } = updateFavoriteSchema.validate(req.body);

  if (error) {
    throw createError(400, (error.message = "missing field favorite"));
  }
  
  await updateStatusContact(req.params.id, req.body, res);
};

async function updateStatusContact(contactId, body, res) {
  const result = await Contact.findByIdAndUpdate(contactId, body, { new: true });

  if (!result) {
    throw createError(404);
  }
  
  return res.status(200).json(result);
}

module.exports = updateFavorite;
