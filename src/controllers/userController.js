const dbContext = require('../database/dbContext');

const userController = {
  getAll: function () {
    const [_req, res, next] = arguments;
    try {
      const users = dbContext.users;

      return res.json(users);
    } catch (err) {
      next(err);
    }
  },
  create: function () {
    const [_req, res, next] = arguments;
    try {
      const users = dbContext.users;

      return res.json(users);
    } catch (err) {
      next(err);
    }
  },
};

module.exports = userController;