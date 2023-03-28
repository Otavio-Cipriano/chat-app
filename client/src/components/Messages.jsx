import React, { useEffect, useState } from 'react'
import { Stack } from 'react-bootstrap'
import Message from './Message'
import { useSocket } from '../context/useSocket';

export default function Messages({messages}) {
    // const [messages, setMessages] = useState([])
    // const { socket } = useSocket();

    // useEffect(() =>{
    //     socket.on('receive_message', (data) => {
    //        setMessages((values) => [...values, data])
    //     })
    // }, [])
    // console.log(messages)
    return (
        <Stack>
            {
                messages?.map((message, idx) =>{
                    return (<Message key={idx} message={message}/>)
                })
            }
        </Stack>
    )
}
