import React from 'react'
import router from './Routes'
import { RouterProvider } from 'react-router-dom'

export default function Routing() {
  return (
    <RouterProvider router={router}/>
  )
}
