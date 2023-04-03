const { Router } = require("express");

const controller = require('./auth.controller')
const middlewares = require('./auth.middlewares')

const router = Router()

router.post(
    '/login',
    middlewares.validateLogin, 
    controller.login)

router.post(
    '/signup', 
    middlewares.validateSignup,
    controller.signup)

module.exports = router;