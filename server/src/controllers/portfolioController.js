const Portfolio = require('../models/Portfolio')
const validator = require('validator')

exports.createPortfolio = async (req, res) => {
  console.log('Adding portfolio in server')
  let { url } = req.body
  console.log('body', req.body)
  let isurl = validator.isURL(url, {
    protocols: ['http', 'https'],
    require_protocol: true
  })
  if (!isurl) {
    req.body.url = 'https://' + url
  }

  testme = {
    url: req.body.url,
    likes: 0
    // timestamp
  }
  try {
    const portfolio = await new Portfolio(testme).save()
    res.send(portfolio)
  } catch (err) {
    console.log('There was an error')
    console.log('error', err)
    res.status(400).send('Something went wrong')
  }
  // console.log('portfolio time', portfolio._id.getTimestamp())
}

exports.getPortfolios = async (req, res) => {
  console.log('Getting all portfolios')
  const portfolios = await Portfolio.find().sort({ created_at: -1 })
  console.log(portfolios)
  res.send({
    portfolios
  })
  // console.log('body', req.body)
}
