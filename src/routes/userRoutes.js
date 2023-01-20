const express = require("express");
const route = express.Router();

const { createUserSchema, updateUserSchema } = require("../database/schemas");
const validateInformation = require("../middlewares/validateJoi");

const userController = require("../controllers/userController");

route
  .route("/user")
  .get(userController.getAll)
  .get(() => {})
  .post(validateInformation(createUserSchema), userController.create)
  .put(validateInformation(updateUserSchema), () => {})
  .delete(() => {});

module.exports = route;
