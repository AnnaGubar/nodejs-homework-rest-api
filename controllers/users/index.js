const signup = require("./signup");
const login = require("./login");
const logout = require("./logout");
const current = require("./current");
const setAvatar = require("./setAvatar");
const verifyEmail = require("./verifyEmail");
const resendVerifyEmail = require("./resendVerifyEmail");

module.exports = {
  signup,
  login,
  logout,
  current,
  setAvatar,
  verifyEmail,
  resendVerifyEmail,
};
