import React from 'react'
import { Container, Row, Col, Form, Button, Stack } from 'react-bootstrap'
import Chat from '../components/Chat'
import Sidebar from '../components/Sidebar'

export default function Dashboard() {
  return (
    <Container fluid>
      <Row>
        <Col md={3} className='vh-100 border-end border-dark'>
          {/* <Sidebar/> */}
          <h2>AAAAA</h2>
        </Col>
        <Col md={9}>
          {/* <Chat/> */}
        </Col>
      </Row>
    </Container>
  )
}
