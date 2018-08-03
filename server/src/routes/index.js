const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const authController = require('../controllers/authController')
const passport = require('passport')

router.get('/', (req, res) => {
  console.log('going to root')
  res.send({
    msg: 'Hey'
  })
})


router.post('/login', 
authController.login, 
authController.returnAuthenticatedUser
)
// router.post('/login', passport.authenticate('local'), (req, res) => {
//   console.log(req.user)
// })
// router.get('/register', userController.registerForm)

// 1. Validate the registration data
// 2. register the user
// 3. we need to log them in
router.post(
  '/register',
  userController.validateRegister,
  userController.register,
  authController.login,
  authController.returnAuthenticatedUser
)

router.get('/logout', authController.logout)

// router.get('/account', authController.isLoggedIn, userController.account);
// router.post('/account', catchErrors(userController.updateAccount));
// router.post('/account/forgot', catchErrors(authController.forgot));
// router.get('/account/reset/:token', catchErrors(authController.reset));
// router.post('/account/reset/:token',
//   authController.confirmedPasswords,
//   catchErrors(authController.update)
// );

module.exports = router
