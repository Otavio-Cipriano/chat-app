const Joi = require('joi')

const validateUserOnSignup =  (user) => {
    const schema = Joi.object({
        username: Joi.string().min(3).max(25).alphanum().required(),
        password: Joi.string().min(6).max(30).required(),
        email: Joi.string().email().required()
    })

  const result = schema.validate(user)

  if(result.error) return {success: false, error: result.error.details}

  return {success: true, values: result.value}
}

module.exports = { validateUserOnSignup }