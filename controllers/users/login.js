const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");
const { SECRET_KEY } = process.env;

const { User, loginSchema } = require("../../models/user");
const { createError } = require("../../helpers");

const login = async (req, res) => {
  const { error } = loginSchema.validate(req.body);
  if (error) {
    throw createError(400, error.message);
  }

  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    throw createError(401, "Email wrong");
  }

  if(!user.verify){
    throw createError(401, "Email not verify");
}

  const comparePassword = await bcrypt.compare(password, user.password);
  if (!comparePassword) {
    throw createError(401, "Password wrong");
  }

  const payload = {id: user._id};
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "24h" });
  
  // перед тем как отправить токен на бекенд - сохраняем
  await User.findByIdAndUpdate(user._id, { token });

  res.json({
    token,
    user: {
      email: user.email,
      subscription: user.subscription,
    },
  });
};

module.exports = login;
