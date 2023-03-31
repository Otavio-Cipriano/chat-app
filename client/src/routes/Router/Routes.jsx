import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../../layouts/MainLayout"
import Dashboard from "../../pages/Dashboard"
import Lobby from "../../pages/Lobby"
import ProtectedRoute from "../ProtectedRoute"
import PublicLayout from "../../layouts/PublicLayout"
import Signup from "../../pages/Signup"

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children: [
        {
          path: "",
          element: <Dashboard/>,
        },
        {
          path: "signup",
          element: <Signup/>
        }
      ]
    }
])

export default router