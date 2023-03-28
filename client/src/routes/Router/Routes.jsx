import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../../layouts/MainLayout"
import Dashboard from "../../pages/Dashboard"
import Lobby from "../../pages/Lobby"
import ProtectedRoutes from "../ProtectedRoutes"

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children: [
        {
          path: "/",
          element: <Lobby/>
        },
        {
          path: "/chat",
          element: <ProtectedRoutes><Dashboard/></ProtectedRoutes>,
        }
      ]
    }
])

export default router