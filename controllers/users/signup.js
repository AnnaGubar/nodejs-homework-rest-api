const bcrypt = require("bcryptjs");

const { User, registerSchema } = require("../../models/user");
const { createError } = require("../../helpers");

const register = async (req, res) => {
  const { error } = registerSchema.validate(req.body);
  if (error) {
    throw createError(400, error.message);
  }

  // console.log(req.body) // { email: 'lena@lena.com', password: '123123' }

  const { email, password } = req.body;

  // есть ли такой email в базе
  const user = await User.findOne({ email });
  if (user) {
    throw createError(409, "Email in use");
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const result = await User.create({ ...req.body, password: hashPassword });

  res.status(201).json({
    email: result.email,
    subscription: result.subscription,
  });
};

module.exports = register;
