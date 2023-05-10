
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Products from '../pages/Products'
import SingleProduct from '../pages/SingleProduct'
import Notfound from '../pages/Notfound'
import Privateroute from './Privateroute'
import Register from '../pages/Register'
import Furniture from '../pages/Furniture'
import Laptops from '../pages/Laptops'
import Watch from '../pages/Watch'
import Adminlogin from '../pages/Adminlogin'
import Admindashboard from '../pages/Admindashboard'
import Cart from '../pages/Cart'

const Allroutes = () => {
    return (<Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/products/:id' element={<Privateroute><SingleProduct /></Privateroute>}></Route>
        <Route path='/products/furniture' element={<Furniture />}></Route>
        <Route path='/products/laptops' element={<Laptops />}></Route>
        <Route path='/products/watches' element={<Watch />}></Route>
        <Route path='/adminlogin' element={<Adminlogin />}></Route>
        <Route path='/adminDashboard' element={<Privateroute><Admindashboard /></Privateroute>}></Route>
        <Route path='/cart' element={<Privateroute><Cart /></Privateroute>}></Route>
        <Route path='*' element={<Notfound />}></Route>
    </Routes>)

}

export default Allroutes
