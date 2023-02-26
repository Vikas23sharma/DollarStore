import React from 'react'
import { Authcontext } from '../context/Authcontextprovider'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'

const Privateroute = ({ children }) => {
    const { isAuth, isAdmin } = useContext(Authcontext)

    if (!isAuth&&!isAdmin) { return <Navigate to={'/login'} /> }
    if (!isAdmin&&!isAuth) { return <Navigate to='/adminlogin' /> }

    return children
}

export default Privateroute
