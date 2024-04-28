import { UserState } from "@/store/reducers/users";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { Outlet } from 'react-router-dom'
import { useMediaQuery } from 'usehooks-ts'
import DeskTopSidebar from "@/components/dashboard/DesktopSidebar";
import DashboardMain from "@/components/dashboard/DashboardMain";
interface DashboardProps {
    isAuthenticated: boolean;
  }



function Dashboard() {
    const users = useSelector((state:RootState)=> state.users)
    const matches = useMediaQuery('(min-width: 768px)')

  return (
    <div className="flex md:flex-row">
      {matches ? <DeskTopSidebar/> : <h1>Small</h1>} 
      <div className="m-10">
     
      <Outlet/>
      </div>
    </div>
  )
}

export default Dashboard
