const { Contact } = require("../../models/contact");

const getAll = async (req, res) => {
  const {page = 1, limit = 2} = req.query;
  const skip = (page - 1) * limit;

  const {id: owner} = req.user;
  const result = await Contact.find({owner}, "-createdAt -updatedAt", {skip, limit: Number(limit)}).populate("owner", "email");
  
  res.status(200).json(result);
};

module.exports = getAll;
