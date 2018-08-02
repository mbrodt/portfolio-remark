module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'portfolio-remark',
    user: process.env.DB_USER || 'portfolio-remark',
    password: process.env.DB_PASS || 'portfolio-remark',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './portfolio-remark.sqlite'
    }
  }
}
