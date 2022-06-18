//Config conectada a .env

require('dotenv').config();

module.exports = {
  environment: process.env.NODE_ENV || 'development',
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
  host: process.env.MYSQL_HOST,
  port: 3306,
  dialect: process.env.DIALECT || 'mysql'
}