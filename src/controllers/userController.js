const dbContext = require('../database/dbContext');
const users = dbContext.users;

const userController = {
  getAll: function () {
    const [_req, res, next] = arguments;
    try {

      return res.json(users);
    } catch (err) {
      next(err);
    }
  },
  create: function () {
    const [ req, res, next ] = arguments;
    try {
      const {id, name, lastName} = req.body;

      const newUser = { id, name, lastName };
      
      users.push(newUser)

      return res.json(newUser);
    } catch (err) {
      next(err);
    }
  },
};

module.exports = userController;