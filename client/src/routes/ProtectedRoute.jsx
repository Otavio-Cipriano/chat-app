import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useSocket } from '../context/useSocket'

export default function ProtectedRoute({ children }) {
    const {userData} = useSocket()
    
    if (!userData?.room) return (
        <Navigate to={'/'}/>
    )

    return (
        <>{children}</>
    )
}
