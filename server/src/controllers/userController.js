const mongoose = require('mongoose')
const User = require('../models/User')

exports.loginForm = (req, res) => {
  res.send('Login form')
}

exports.validateRegister = (req, res, next) => {
  console.log(req.body)
  req.sanitizeBody('name')
  req.checkBody('name', 'You must supply a name!').notEmpty()
  req.checkBody('email', 'That Email is not valid!').isEmail()
  req.sanitizeBody('email').normalizeEmail({
    remove_dots: false,
    remove_extension: false,
    gmail_remove_subaddress: false
  })
  req.checkBody('password', 'Password Cannot be Blank!').notEmpty()

  req
    .checkBody('password', 'Password must be between 8 and 32 characters')
    .isLength({ min: 5, max: 32 })
  req
    .checkBody('confirmPassword', 'Confirmed Password cannot be blank!')
    .notEmpty()
  req
    .checkBody('confirmPassword', 'Oops! Your passwords do not match')
    .equals(req.body.password)

  const errors = req.validationErrors()
  console.log('errors', errors)
  if (errors) {
    res.status(400).send({
      errors: errors
    })
    return // stop the fn from running
  }
  next() // there were no errors!
}

exports.register = async (req, res, next) => {
  const user = new User({ email: req.body.email, name: req.body.name })
  console.log('user', user)
  try {
    await User.register(user, req.body.password)
  } catch (errors) {
    res.status(409).send({
      errors: [
        {
          msg: 'A user with that email is already registered'
        }
      ]
    })
    return
  }
  next() // pass to authController.login
}
