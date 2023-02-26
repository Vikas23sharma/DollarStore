import React, { createContext, useState } from 'react'

export const Cartcontext = createContext()

const Cartcontextprovider = ({ children }) => {
    const [cartData, setCartData] = useState([])




    return <Cartcontext.Provider value={{ cartData, setCartData }}>
        {children}
    </Cartcontext.Provider>

}

export default Cartcontextprovider
