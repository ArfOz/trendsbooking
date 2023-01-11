import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PublicRoute = ({ isAuth, redirectPath }) => {

    return isAuth ? <Navigate to={redirectPath} /> : <Outlet />
}

export default PublicRoute