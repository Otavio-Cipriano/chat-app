import React, { useEffect, useRef, useState } from 'react'
import { Button, Form, Stack } from 'react-bootstrap'

import { useSocket } from '../context/useSocket'
import Messages from './Messages';

export default function Chat() {
    const lastMonk = useRef()
    const { socket, userData } = useSocket();
    const [messages, setMessages] = useState([]);
    const [currentMessage, setCurrentMessages] = useState('');

    const handleOnChange = (e) => {
        setCurrentMessages(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const menssageData = {
            room: userData.room,
            remittor: userData.username,
            date: new Date(),
            message: currentMessage
        }
        socket.emit('send_message', menssageData)
        setMessages((msgs) => [...msgs, menssageData])
        setCurrentMessages('')
    }

    useEffect(() => {
        const receiveMessage = (data) => {
            setMessages((msgs) => [...msgs, data])
          }
      
          socket.on("receive_message", receiveMessage);
      
          return () => {
            socket.off("receive_message", receiveMessage);
          };
    }, [socket])

    useEffect(() => {
        lastMonk.current.scrollIntoView({ behavior: "smooth" });
    }, [messages])

    return (
        <Stack className='h-100 py-2 vh-100'>
            <Stack style={{height: '95%', overflow: 'hidden', overflowY: 'auto'}}>
                <Messages messages={messages} />
                <div ref={lastMonk}></div>
            </Stack>
            <Form onSubmit={handleSubmit} style={{height: '5%'}}>
                <Stack direction='horizontal'>
                    <Form.Control type='text' placeholder='Enter a Message' onChange={handleOnChange} value={currentMessage}/>
                    <Button type='submit'>Send</Button>
                </Stack>
            </Form>
        </Stack>
    )
}
