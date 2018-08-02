const Joi = require('joi')

module.exports = {
  register(req, res, next) {
    const schema = {
      name: Joi.string().regex(new RegExp('^[a-zA-Z]{2,}$')),
      email: Joi.string().email(),
      password: Joi.string().regex(new RegExp('^[a-zA-Z0-9]{8,32}$'))
    }

    const { error, value } = Joi.validate(req.body, schema)

    if (error) {
      switch (error.details[0].context.key) {
        case 'name':
          res.status(400).send({
            error: 'Your name must be at least 2 characters long'
          })
          break
        case 'email':
          res.status(400).send({
            error: 'Please provide a valid email address'
          })
          break
        case 'password':
          res.status(400).send({
            error: `
            The password provided failed to match the following rules:
            <br>
            1. Must contain ONLY lowercase, uppercase and number characters.
            <br>
            2. Must be at least 8 characters long and not greater than 32 characters.
            `
          })
          break
        default:
          res.status(400).send({
            error: 'Something went wrong with the registration'
          })
      }
    } else {
      next()
    }
  }
}
