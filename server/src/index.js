const chat = require('./chat/chat')
const server = require('./server')
const socket = require('./socket')

const { PORT } = require('./config/env')
const { DBConnection } = require('./config/db')

DBConnection()

socket.on('connection', chat)

server.listen(PORT, () => {
    console.log(`Server Running at ${PORT}`)
})