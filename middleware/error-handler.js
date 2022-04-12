const { customError } = require("../error/custom-error");

const errorHandler = async (err, req, res, next) => {
  if (err instanceof customError) {
    return res.status(err.status).json({ msg: err.message });
  }
  return res.status(500).json({ msg: err });
};

module.exports = errorHandler;
