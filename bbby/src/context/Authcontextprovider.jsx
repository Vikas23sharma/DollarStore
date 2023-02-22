import React, { createContext, useState } from 'react'

export const Authcontext = createContext()

const Authcontextprovider = ({ children }) => {
  const [isAuth, setIsauth] = useState(false)
  const [token, setToken] = useState(null)
  const [isReg, setIsreg] = useState(false)

  const login = (token) => {
    setIsauth(true)
    setToken(token)
  }

  const logout = () => {
    setIsauth(false)
    setToken(null)
  }

  const register = () => {
    setIsreg(true)
  }


  return (
    <Authcontext.Provider value={{ isAuth, login, logout, token, isReg,register}}>
      {children}
    </Authcontext.Provider>
  )
}

export default Authcontextprovider
