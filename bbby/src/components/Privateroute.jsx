import React from 'react'
import { Authcontext } from '../context/Authcontextprovider'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'

const Privateroute = ({ children }) => {
    const { isAuth } = useContext(Authcontext)

    if (!isAuth) { return <Navigate to={'/login'} /> }
    
    return children
}

export default Privateroute
