const Joi = require('joi');

const personSchema = Joi.object({
  navn: Joi.string().min(2).trim().required(),
  ministerPost: Joi.string().trim().optional(),
  parti: Joi.string().trim().required(),
  position: Joi.array()
    .items(Joi.string().valid('minister', 'formand'))
    .min(1)
    .required(),
  startDato: Joi.date().optional()
});

function validatePerson(req, res, next) {
  const { error, value } = personSchema.validate(req.body, {
    abortEarly: false,
    stripUnknown: true
  });

  if (error) {
    return res.status(400).json({
      error: 'Ugyldige felter i persondata',
      details: error.details.map(detail => detail.message)
    });
  }

  req.body = value;
  next();
}

module.exports = validatePerson;