const jwt = require("jsonwebtoken");
const { SECRET_KEY } = process.env;

const { User } = require("../models/user");
const { createError } = require("../helpers");

const auth = async (req, res, next) => {
  // console.log("auth, req.headers: ", req.headers); //

  const { authorization = "" } = req.headers;

  // console.log("auth, authorization: ", authorization); //

  const [bearer, token] = authorization.split(" ");

  if (bearer !== "Bearer") {
    next(createError(401));
  }

  try {
    // console.log("auth, jwt.verify: ", jwt.verify(token, SECRET_KEY)); //

    const { id } = jwt.verify(token, SECRET_KEY);

    const user = await User.findById(id);

    if (!user || !user.token) {
      next(createError(401));
    }
    
    req.user = user;
    next();
  } catch (error) {
    next(createError(401, error.message));
  }
};

module.exports = auth;
