
const Joi = require('joi');

const idSchema = Joi.object({
  id: Joi.string().hex().length(24).required()
});

function validateId(req, res, next) {
  const { error } = idSchema.validate(req.params);

  if (error) {
    return res.status(400).json({
      error: 'Ugyldigt person-id'
    });
  }

  next();
}

module.exports = validateId;
