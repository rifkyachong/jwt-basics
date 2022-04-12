const { createCustomError } = require("../error/custom-error");
const jwt = require("jsonwebtoken");

const login = async (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return next(createCustomError("please provide username or password", 401));
  }

  const id = new Date().getDate();

  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  return res.status(200).json({ msg: "login successful", token });
};

const dashboard = async (req, res, next) => {
  return res.status(200).json({
    msg: "hello achong",
    secret: `this is your data: ${Math.floor(Math.random() * 100)}`,
  });
};

module.exports = { login, dashboard };
