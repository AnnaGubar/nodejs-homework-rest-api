const { Contact } = require("../../models/contact");

const getById = async (req, res) => {
  const result = await Contact.find({}, "-createdAt -updatedAt");
  res.status(200).json(result);
};

module.exports = getById;