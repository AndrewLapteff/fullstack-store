const Router = require('express')
const router = new Router() // root router
const userController = require('../controllers/userController')

router.post('/register', userController.registration)
router.post('/login', userController.login)
router.get('/auth', userController.check)

module.exports = router