
import { Outlet } from 'react-router-dom'
function Dashboard(){
    return(
        <div className="flex flex-row">
            <DashboardSideBar/>
            <Outlet/>
        </div>
    )
}

export default Dashboard