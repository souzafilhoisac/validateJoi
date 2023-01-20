const express = require("express");
const route = express.Router();

const {
  createUserSchema /*updateUserSchema*/,
} = require("../database/schemas");
const validateInformation = require("../middlewares/validateJoi");

const userController = require("../controllers/userController");

route.get("/user", userController.getAll);
// route.get('/', (req, res) => {
//   res.send('Hello World!')
// });

route.post(
  "/user",
  validateInformation(createUserSchema),
  userController.create
);

module.exports = route;
