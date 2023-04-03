const auth = require('./auth/auth.routes')

const { Router } = require("express")

const router = Router()

router.get('/', (req, res) => {
    res.json({
        message: 'API - 👋',
      });
})

router.use('/auth', auth)

module.exports = router;
