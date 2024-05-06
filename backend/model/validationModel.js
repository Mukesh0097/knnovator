const Joi = require('@hapi/joi');

const schema = Joi.object({
    firstName: Joi.string().required("first name is required"),
    lastName: Joi.string().required("last name is required"),
    address:Joi.string().required("address is required")
  });

module.exports = schema