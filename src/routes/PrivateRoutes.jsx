import {Navigate, Outlet} from "react-router-dom"

const PrivateRoutes = () => {

    const isAuth = sessionStorage.getItem("token")
    
  return !isAuth ? <Navigate to="/login" /> : <Outlet />
}

export default PrivateRoutes