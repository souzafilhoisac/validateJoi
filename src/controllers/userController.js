const dbContext = require('../database/dbContext');
const users = dbContext.users;

const userController = {
  getAll: function () {
    const [_req, res, next] = arguments;
    try {

      return res.status(200).json(users);
    } catch (err) {
      next(err);
    }
  },
  create: function () {
    const [ req, res, next ] = arguments;
    try {
      const {id, name, lastName, email, password} = req.body;

      const newUser = { id, name, lastName, email, password };

      users.push(newUser)

      return res.status(200).json(users);
    } catch (err) {
      next(err);
    }
  },
};

module.exports = userController;