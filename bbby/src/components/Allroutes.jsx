
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Products from '../pages/Products'
import SingleProduct from '../pages/SingleProduct'
import Notfound from '../pages/Notfound'
import Privateroute from './Privateroute'
import Register from '../pages/Register'

const Allroutes = () => {
    return (<Routes>
        <Route path='/' element={<Privateroute><Home /></Privateroute>}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/products' element={<Privateroute><Products /></Privateroute>}></Route>
        <Route path='/products/:id' element={<SingleProduct />}></Route>
        <Route path='*' element={<Notfound />}></Route>
    </Routes>)

}

export default Allroutes
