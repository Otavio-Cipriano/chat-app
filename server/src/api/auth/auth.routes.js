const { Router } = require("express");

const controller = require('./auth.controller')
const middlewares = require('./auth.middlewares')

const router = Router()

router.get('/', (req,res) => {
    res.send('bunda')
})

router.post(
    '/login',
    middlewares.validateLogin, 
    controller.login)

router.post(
    '/signup', 
    middlewares.validateSignup,
    controller.signup)

module.exports = router;