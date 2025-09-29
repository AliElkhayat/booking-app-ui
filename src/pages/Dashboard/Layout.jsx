import DashboardNavbar from "../../components/Dashboard/DashboardNavbar"
import { Outlet } from 'react-router-dom'
import DashbaordSideNavbar from "../../components/Dashboard/DashboardSideNavbar"

function Layout() {
    return (
        <div className="flex flex-col min-h-screen dark:bg-[#1D2125]">
            <DashboardNavbar />

            <div className="flex flex-1">
                <DashbaordSideNavbar />
                <div className="flex-1 p-4">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Layout
