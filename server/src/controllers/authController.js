const passport = require('passport')

exports.login = (req, res, next) => {
  passport.authenticate('local')(req, res, next)
}

exports.returnAuthenticatedUser = (req, res) => {
  res.send({
    user: req.user
  })
}

exports.logout = (req, res) => {
  console.log('logging out')
  req.logout()
  res.send({
    msg: `Successfully logged out`
  })
}

exports.isLoggedIn = (req, res, next) => {
  // first check if the user is authenticated
  if (req.isAuthenticated()) {
    next() // carry on! They are logged in!
    return
  }
  req.flash('error', 'Oops you must be logged in to do that!')
  res.redirect('/login')
}
