import { UserState } from "@/store/reducers/users";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { Outlet } from 'react-router-dom'
interface DashboardProps {
    isAuthenticated: boolean;
  }



function Dashboard() {
    const users = useSelector((state:RootState)=> state.users)
  return (
    <div>
      <h1 className="text-primary bg-white">HELLOOSDASHBOAERD</h1>
      <Outlet/>
    </div>
  )
}

export default Dashboard
