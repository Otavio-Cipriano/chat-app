const jwt = require('jsonwebtoken')
const Joi = require('joi')

const { API_SECRET_KEY } = require('../../config/env')

const validateUserOnSignup = (user) => {
  const schema = Joi.object({
    username: Joi.string().min(3).max(25).alphanum().required(),
    password: Joi.string().min(6).max(30).required(),
    email: Joi.string().email().required()
  })

  const result = schema.validate(user)

  if (result.error) return { success: false, error: result.error.details }

  return { success: true, values: result.value }
}

const validateUserOnLogin = (user) => {

  const schema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required()
  })

  const result = schema.validate(user)

  if (result.error) return { success: false, error: result.error.details }

  return { success: true, values: result.value }
}

const generateToken = (payload) => {
  const token = jwt.sign({payload: payload}, API_SECRET_KEY, {
    expiresIn: '1h'
  })
  return token
}

module.exports = { validateUserOnSignup, validateUserOnLogin, generateToken }