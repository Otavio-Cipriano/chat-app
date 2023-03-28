const chat = require('./chat/chat')
const server = require('./server')
const socket = require('./socket')

const { PORT } = require('./config/env')

const io = socket(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
})

io.on('connection', chat)

server.listen(PORT, () => {
    console.log(`Server Running at ${PORT}`)
})