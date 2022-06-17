require('dotenv').config();

module.exports = {
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT || 3306,
  dialect: process.env.DIALECT || 'mysql'
}