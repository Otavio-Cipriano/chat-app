const bcrypt = require('bcrypt')
const service = require('./auth.sevices')

const validateSignup = async (req, res, next) => {
    const result = service.validateUserOnSignup(req.body)
    
    if(!result.success) {
        return res.status(400).json(result)
    }

    const hash = await bcrypt.hash(req.body.password, 10)
    req.body.password = hash

    next()
}

const validateLogin = (req, res, next) => {
    const result = service.validateUserOnLogin(req.body)

    if(!result.success) return res.status(401).json(result)

    next()
}

module.exports = { validateSignup, validateLogin }