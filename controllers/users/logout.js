const { User } = require("../../models/user");
const { createError } = require("../../helpers");

const logout = async (req, res) => {
    const { _id } = req.user;
    if (!_id) {
      throw createError(401, "Not authorized");
    }
    // обнуляем токен
    await User.findByIdAndUpdate(_id, { token: null });
    res.status(204).send();
}

module.exports = logout;