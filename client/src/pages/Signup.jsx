import { useState } from "react";
import { Button, Container, Stack, Form } from "react-bootstrap";
import auth from "../services/auth";

export default function Signup() {
  const [formData, setFormData] = useState({})
  const [formError, setFormError] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()
    auth()
    // console.log(formData)
  }
  
  const handleFormChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setFormData(values => ({ ...values, [name]: value }))
  }

  return (
    <Container className='vw-100 vh-100' style={{ display: "grid", placeItems: "center" }}>
      <Stack gap={2} className="mx-auto mt-4 rounded shadow py-4 w-100 align-self-center" style={{ maxWidth: '500px' }}>
        <Form className="w-75 mx-auto" onSubmit={handleSubmit}>
          <h2 className='text-center'>Sign up</h2>
          <Form.Group >
            <Form.Label className='my-2'>Email</Form.Label>
            <Form.Control name='email' onChange={handleFormChange} value={formData.email || ""} type="email" placeholder="Enter a email" />
          </Form.Group>
          <Form.Group>
            <Form.Label className='my-2'>Username</Form.Label>
            <Form.Control name='username' onChange={handleFormChange} value={formData.username || ""}  type="text" placeholder="Enter a usrnamename" />
          </Form.Group>
          <Form.Group className='my-2'>
            <Form.Label >Password</Form.Label>
            <Form.Control name='password'  onChange={handleFormChange} value={formData.password || ""} type="password" placeholder="Enter a password" />
          </Form.Group>
          <div className='text-center'>
            <Button type="submit" size='lg' className='mt-2 px-4'>Sign up</Button>
          </div>
        </Form>
      </Stack>
    </Container>
  )
}
