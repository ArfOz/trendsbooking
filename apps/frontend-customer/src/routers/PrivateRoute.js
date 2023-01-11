import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = ({ isAuth, redirectPath }) => {

    return isAuth ? <Outlet /> : <Navigate to={redirectPath} />
}

export default PrivateRoute