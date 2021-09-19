const Joi = require('joi');
const invalidData = require('../utils/invalidData');

const BAD_REQUEST = 400;

const validRegister = (req, _res, next) => {
  const { error } = Joi.object({
    street: Joi.string().not().empty(),
		number: Joi.number().not().empty(),
		complement: Joi.not().allow(),
		district: Joi.string().not().empty(),
		city: Joi.string().not().empty(),
		cep: Joi.number().not().empty(),
  }).validate(req.body);

  if (error) return next(invalidData(error.message, BAD_REQUEST));

  next();
};

module.exports = validRegister;