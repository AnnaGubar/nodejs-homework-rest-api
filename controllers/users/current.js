const { createError } = require("../../helpers");

const current = async (req, res) => {
  const { _id, email, subscription } = req.user;
  if (!_id) {
    throw createError(401, "Not authorized");
  }

  res.status(200).json({
    email,
    subscription,
  });
};

module.exports = current;
