function errorHandler(err, req, res, next) {
  console.error(err);
  res.status(500).json({ Error: "Oops, something is wrong..." });
}

module.exports = errorHandler;
