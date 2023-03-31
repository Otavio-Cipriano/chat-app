const user = require('../user/user.service')
const service = require('./auth.sevices')
const bcrypt = require('bcrypt')

const signup = async (req, res) => {
    const result = await user.create(req.body)

    if(!result.success){
        return res.status(400).json({success: result.success, error: result.error})
    }

    const token = service.generateToken(result.data.username)
    res.status(201).json({success: result.success, data: result, token: token})
}

const login = async (req, res) => {
    const result = await user.findOne(req.body.username)
    if(!result.success){
        return res.status(401).json({success: result.success, message: result.data})
    }

    if(!await bcrypt.compare(req.body.password, result.data.password)){
        return res.status(401).json({message: 'Password invalid'})
    }

    result.data.password = undefined;

    const token = service.generateToken(result.data.username)
    res.status(200).json({success: result.success, data: result, token: token})
}

module.exports = {signup, login }
