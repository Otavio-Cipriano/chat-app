require('dotenv').config()

const { PORT, DB_URI, API_SECRET_KEY } = process.env

module.exports = {PORT, DB_URI, API_SECRET_KEY}