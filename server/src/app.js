const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send({
    msg: 'hey there'
  })
})

app.post('/register', (req, res) => {
  let { email, password } = req.body
  res.send(`Hello there, ${email}. Your password is ${password}`)
})

app.listen(process.env.PORT || 8081)
