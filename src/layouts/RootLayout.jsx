import { Outlet } from "react-router-dom"
import Navarbar from "../Components/Navarbar"

export default function RootLayout() {
  return (
    <div>
      <Navarbar/>
      <Outlet />
    </div>
  )
}
