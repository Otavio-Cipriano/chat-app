import React from 'react'
import convertToMessageDate from '../hooks/useConvertDate'
import { useSocket } from '../context/useSocket'

export default function Message({ message }) {
    const {userData} = useSocket()
    const messageDate = convertToMessageDate()
    const isUser = message.remittor == userData.username ? 'bg-info': 'bg-success';
   
    return (
        <div className=' w-75 text-black my-3' style={{maxWidth: '380px'}}>
            <p className={`${isUser} px-3 py-2 rounded my-0 mb-2 shadow-sm`} style={{wordBreak: 'break-word'}}>{message.message}</p>
            <p className='pe-2 m-0 text-end text-white'>{`${message.remittor} - ${messageDate}`}</p>
        </div>
    )
}
