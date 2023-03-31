import { createContext, useContext, useState } from "react";
import { io } from "socket.io-client";

const socket = 'io.connect("http://localhost:3001");'

const SocketContext = createContext()

export function useSocket(){
    return useContext(SocketContext)
}

export default function SocketContextProvider({children}){
    const [userData, setUserData] = useState({})
    const [messages, setMessages] = useState([])

    const value = {
        socket,
        userData,
        setUserData
    }

    return (
        <SocketContext.Provider value={value}>
            {children}
        </SocketContext.Provider>
    )
}