const { config } = require('dotenv');

config()

const PORT = process.env.PORT || 5000
// const DB_HOST = process.env.DB_HOST 
// const DB_PORT = process.env.DB_PORT
// const DB_USER = process.env.DB_USER
// const DB_PASSWORD = process.env.DB_PASSWORD
// const DB_DATABASE = process.env.DB_DATABASE

module.exports = {
  // DB_HOST,
  // DB_PORT,
  // DB_USER,
  // DB_PASSWORD,
  // DB_DATABASE,
  PORT
}