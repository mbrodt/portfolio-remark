module.exports = {
  port: process.env.PORT || 8081,
  database:
    process.env.DB_NAME ||
    'mongodb://mbrodt:secretp455@ds111012.mlab.com:11012/portfolio-remark'
}
