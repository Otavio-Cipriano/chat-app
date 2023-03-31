const { Server } = require('socket.io')
const server = require('./server')

const socket = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
})

module.exports = socket