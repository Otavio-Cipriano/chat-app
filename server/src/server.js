const express = require('express');
const http = require('http')
const cors = require('cors')

const api = require('./api')

const app = express()
app.use(cors())
app.use(express.json())

const server = http.createServer(app)

app.use('/api/v1', api)


module.exports = server;
