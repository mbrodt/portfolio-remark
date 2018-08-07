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

  try {
    const portfolio = await new Portfolio(req.body).save()
  } catch (err) {
    console.log('There was an error')
  }
  // console.log('portfolio time', portfolio._id.getTimestamp())
}

exports.getPortfolios = async (req, res) => {
  console.log('Getting all portfolios')
  const portfolios = await Portfolio.find()
  console.log(portfolios)
  res.send({
    portfolios
  })
  // console.log('body', req.body)
}
