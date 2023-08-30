import { Outlet } from "react-router-dom"
import Navbar from "./Navbarfix"
import NavbarFix from "./Navbarfix"

const Layout = () => {
    return (
        <>
            <NavbarFix />
            <Outlet />
        </>
    )
}

export default Layout