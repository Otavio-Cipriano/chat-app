const mongoose = require("mongoose");

const { DB_URI } = require("./env");

async function DBConnection() {
  mongoose.connect(DB_URI, {
    useNewUrlParser: true,
  }).then(() => {
    console.log('Succesfully connected to database')
  }).catch((err) => {
    console.log('Database conenction failed. exiting now...')
    console.log(err.stack)
    console.log(err)
    process.exit(1)
  })
}

module.exports = { DBConnection }