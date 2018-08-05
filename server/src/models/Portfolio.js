const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.Promise = global.Promise
const validator = require('validator')
const mongodbErrorHandler = require('mongoose-mongodb-errors')

const commentSchema = new Schema({
  content: {
    type: String,
    required: 'Please supply a comment',
    trim: true
  },
  likes: Number
})

const portfolioSchema = new Schema({
  url: {
    type: String,
    // unique: true,
    lowercase: true,
    trim: true,
    // validate: [validator.isURL, 'Invalid Url'],
    required: 'You must provide an URL'
  },
  // visited: Number,
  likes: Number,
  comments: [commentSchema]
})

portfolioSchema.plugin(mongodbErrorHandler)

module.exports = mongoose.model('Portfolio', portfolioSchema)
