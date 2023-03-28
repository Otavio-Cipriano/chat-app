const service = require('./auth.sevices')

const validateSignup = async (req, res, next) => {
    const result = await service.validateUserOnSignup(req.body)
    
    if(!result.success) {
        return res.status(401).json(result)
    }

    next()
}


module.exports = { validateSignup }