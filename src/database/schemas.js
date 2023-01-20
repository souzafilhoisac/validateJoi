const Joi = require("joi");

module.exports = {
  createUserSchema: Joi.object({
    id: Joi.number().required(),
    name: Joi.string().required().min(3).max(30),
    lastName: Joi.string().required().min(3).max(100),
    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    }),
    password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{6,30}$")),
  }),
  // updateUserSchema: Joi.object({
  //   name: Joi.string().required(),
  //   lastName: Joi.string().required(),
  // })
};
