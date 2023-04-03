const auth = require('../api/auth/auth.sevices')

const chat = (socket) => {
    const { token, username } = socket.handshake.auth

    const tokenIsValid = auth.validateToken(token)

    if(!tokenIsValid.success){
        socket.emit('unauthenticated', {error: "Token Provided Invalid"})
    }

    socket.on('join_room', (data) => {
        socket.join(data.room)
        console.log(data.username + ' Joinned the room ' + data.room)
        socket.to(data.room).emit('joinned',
            {
                ...data,
                date: new Date(),
                remittor: '',
                message: `${data.username} Joinned`
            })
    })

    socket.on('send_message', (data) => {
        console.log(data)
        socket.to(data.room).emit('receive_message', data)
    })

    socket.on('leave_room', (data) => {
        socket.leave(data.room)
        console.log(data.username + 'Left the room' + data.room)
    })

    socket.on('disconnect', () => {
        console.log("User Disconnected")
    })
}

module.exports = chat