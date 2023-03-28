import React from 'react'
import { ListGroup, ListGroupItem, Stack } from 'react-bootstrap'
import { useSocket } from '../context/useSocket'
import { FaChevronLeft } from 'react-icons/fa';

export default function Sidebar() {
  const { userData, setUserData, socket } = useSocket()

  const handleOnClick = () => {
    socket.emit('leave_room', userData)
    setUserData(null)
  }

  return (
    <Stack className='px-2 py-2'>
      <Stack direction='horizontal' gap={3} className='fs-4 '>
        <div onClick={handleOnClick} style={{ marginTop: '-3px' }}>
          <FaChevronLeft />
        </div>
        <div>{userData.username}</div>
      </Stack>
    </Stack>
  )
}
