const dbContext = require("../database/dbContext");
const users = dbContext.users;

const userController = {
  getAll: async (_req, res, next) => {
    try {
      // const users = await dbContextModel.findAll();
      return res.status(200).json(users);
    } catch (err) {
      next(err);
    }
  },
  create: async (req, res, next) => {
    try {
      const { id, name, lastName, email, password } = req.body;

      const newUser = /*await dbContextModel.create*/ {
        id,
        name,
        lastName,
        email,
        password,
      };

      const userFound = users.find((user) => {
        return user.id === newUser.id;
      });

      if (userFound) {
        return res.status(401).json({ Message: "This User id already exists" });
      }

      users.push(newUser);

      return res.status(200).json(users);
    } catch (err) {
      next(err);
    }
  },
};

module.exports = userController;
