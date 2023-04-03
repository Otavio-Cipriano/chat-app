const bcrypt = require('bcrypt')
const service = require('./auth.sevices')
const user = require('../user/user.service')

const validateSignup = async (req, res, next) => {
    const result = service.validateBodyOnSignup(req.body)
    
    if(!result.success) {
        return res.status(400).json(result)
    }

    const usernameAlreadyExists = await user.findOne(result.values.username)

    if(usernameAlreadyExists.success){
        return res.status(400).json({message: 'User already exists'})
    }

    const emailAlreadyExists = await user.findOne(result.values.email)

    if(emailAlreadyExists.success){
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

const validateToken = (req, res, next) => {
    const authHeader = req.get('Authorization');
    
    if(!authHeader) return res.status(401).send({error: "No Token was Provided"})

    const parts = authHeader.split(' ');

    if(!parts.length === 2) return res.status(401).send({error: 'Token Error'})

    const [scheme, token] = parts;

    if(!/^Bearer$/.test(scheme)) return res.status(401).send({error: 'Token in wrong format'})
    
    const result = service.validateToken(token)

    if(!result.success) return res.status(401).send({error: result.error})

    req.user = result.decoded
    next()
}

module.exports = { validateSignup, validateLogin, validateToken }