const { Server } = require('socket.io')


const socket = (server, options) => {
    const io = new Server(server, options)

    return io
}

module.exports = socket