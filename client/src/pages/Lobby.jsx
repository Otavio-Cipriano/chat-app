import React, { useRef, useState } from 'react'
import { Button, Container, Form, Stack } from 'react-bootstrap'

import { useSocket } from '../context/useSocket'
import { redirect, useNavigate } from "react-router-dom";

export default function Lobby() {
  // const inputRef = useRef(null);
  // const { socket, setUserData } = useSocket()
  // const navigate = useNavigate();

  const [formData, setFormData] = useState({})

  const onSubmit = (e) => {
    e.preventDefault()
    // socket.emit('join_room', formData)
    console.log(formData);
    setUserData(formData)
    navigate('/chat')
  }

  // const handleFormChange = (event) => {
  //   const name = event.target.name
  //   const value = event.target.value
  //   setFormData(values => ({ ...values, [name]: value }))
  // }

  return (
    <Container className='vw-100 vh-100' style={{ display: "grid", placeItems: "center" }}>
      <Stack gap={2} className="mx-auto mt-4 rounded shadow py-4 w-100 align-self-center" style={{ maxWidth: '500px' }}>
        <Form className="w-75 mx-auto" onSubmit={onSubmit}>
          <h2 className='text-center'>Join a Room</h2>
          <Form.Group>
            <Form.Label className='my-2'>Username</Form.Label>
            <Form.Control name='username' value={formData.username || ""} onChange={handleFormChange} ref={inputRef} type="text" placeholder="Enter a usrnamename" />
          </Form.Group>
          <Form.Group className='my-2'>
            <Form.Label >Room</Form.Label>
            <Form.Control name='room' value={formData.room || ""} onChange={handleFormChange} type="text" placeholder="Enter a room name" />
          </Form.Group>
          <div className='text-center'>
            <Button type="submit" size='lg' className='mt-2 px-4'>Join</Button>
          </div>
        </Form>
      </Stack>
    </Container>
  )
}
