const { Contact } = require("../../models/contact");

const getAll = async (req, res) => {
  console.log('getAll req.user: ', req.user) //

  // const {id: owner} = req.user;
  // const result = await Contact.find({owner}, "-createdAt -updatedAt").populate("owner", "email");
  const result = await Contact.find({}, "-createdAt -updatedAt");
  res.status(200).json(result);
};

module.exports = getAll;
