const bcrypt = require('bcrypt')
const service = require('./auth.sevices')
const user = require('../user/user.service')

const validateSignup = async (req, res, next) => {
    const result = service.validateBodyOnSignup(req.body)
    
    if(!result.success) {
        return res.status(400).json(result)
    }

    const userAlreadyExist = await user.findOne(result.values.username)

    if(userAlreadyExist.success){
        return res.status(400).json({message: 'User already exists'})
    }

    const hash = await bcrypt.hash(result.values.password, 10)
    req.body.password = hash

    next()
}

const validateLogin = (req, res, next) => {
    const result = service.validateBodyOnLogin(req.body)

    if(!result.success) return res.status(401).json(result)

    next()
}

module.exports = { validateSignup, validateLogin }