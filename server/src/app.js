const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const config = require('../../config')

const passport = require('passport')
const expressValidator = require('express-validator')
const flash = require('connect-flash')

const routes = require('./routes/index')
require('dotenv').config()
// require('dotenv').config({ path: 'variables.env' })

require('./handlers/passport')
const app = express()

app.use(bodyParser.json())
app.use(cors())
app.use(expressValidator())
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())
// app.use((req, res, next) => {
//   req.login = promisify(req.login, req)
//   next()
// })

require('./models/User')
app.use('/', routes)

mongoose.connect(
  config.database,
  { useNewUrlParser: true }
)
mongoose.Promise = global.Promise // Tell Mongoose to use ES6 promises
mongoose.connection.on('error', err => {
  console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`)
})

// sequelize.sync().then(() => {
app.set('port', config.port)
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`)
})
