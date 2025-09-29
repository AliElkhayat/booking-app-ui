import { NavLink } from 'react-router-dom'

function DashbaordSideNavbar() {

    const sideNavbarLinks = [
        { name: "Dashboard", path: "/dashboard" },
        { name: "Add Hotel", path: "/dashboard/add-hotel" },
        { name: "Hotel List", path: "/dashboard/hotel-list" },
    ]
    return (
        <div className='w-16 md:w-65 border-r h-full text-base dark:bg-[#1F1F21] border-gray-300 pt-5 flex flex-col transition-all duration-500'>

            {sideNavbarLinks.map((item, index) => (

                <NavLink key={index} end={item.path === "/dashboard"} to={item.path} className={({ isActive }) =>
                    `md:block hidden text-center py-2 px-4 transition ${isActive ? "bg-[#f9db98] text-black font-semibold" : "text-gray-600 dark:text-gray-300"}`}



                >

                    {item.name}

                </NavLink>

            ))}
        </div>
    )
}

export default DashbaordSideNavbar