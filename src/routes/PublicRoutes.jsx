import {Navigate, Outlet, Route} from "react-router-dom"

const PublicRoutes = () => {

   const isAuth = sessionStorage.getItem("token")

  return !isAuth ? (<Navigate to="/home" />) : (<Outlet><Route index element={<Homepage />} /></Outlet>)
}

export default PublicRoutes