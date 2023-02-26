import { Box, Center, Flex, Img, Input, InputRightElement, InputGroup, Button } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import Hamburger from 'hamburger-react'
import React, { useState } from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import {BsSearch} from 'react-icons/bs'
import { Link, Link as Routerlink } from 'react-router-dom'
import { Authcontext } from '../context/Authcontextprovider'
import { useContext } from 'react'
import logo from './log1.png'
import log from './log2.png'
import axios from 'axios'


const Burger = () => { return <Icon as={Hamburger} /> }

// const links=[{to:'/',title:'HOME'},
// {to:'/',title:'HOME'},
// {to:'/accesories',title:'ACCESORIES'},
// {to:'/login',title:'LOGIN'},]



const Navbar = () => {
    const[search,setSearch]=useState("")
    const { logout, isAuth,isAdmin,adminlogout } = useContext(Authcontext)

    const handleSearch=(e)=>{
        axios.get(`https://dummyjson.com/products/search?q=${search}`)
        .then((res) => {
        //   setLoading(false)
          console.log(res.data)
        //   setTotal(res.data.total)
        //   setProducts(res.data.products)
        })
    }





    return (
        <Box style={{ width: "100%", position:"static", top: "0", marginBottom: "1%" }}>
            <Box style={{ padding: "5px", backgroundColor: "chartreuse", color: "black" }}><Center>
                Our Easter Sale Is Here.Shop Now!!
            </Center></Box>
            <Box style={{ display: "flex", justifyContent: "space-around", alignItems: "center", padding: "5px", backgroundColor: "black", color: "white" }}>
                <Box><Img width={100} height={50} src={logo} /></Box>
                <Box style={{ display: "flex", justifyContent: "space-evenly" }}>
                    <Box><b>Same Day Delivery|</b></Box>
                    <Box><b>Store Pickup</b></Box>
                </Box>
            </Box>
            <Flex style={{
                border: "1px solid black"
                , justifyContent: "space-evenly", padding: "1%", backgroundColor: " chartreuse "
            }}>
                <Box style={{ width:"10%",display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Burger />
                    <Routerlink to={'/'}><img width={100} height={50} src={log} alt='logo' /></Routerlink>

                </Box>
                
                    <Input onChange={(e)=>setSearch(e.target.value)} backgroundColor={"white"} className='searchbar' padding="1%" borderRadius={20} placeholder="What Product Can We Help You Find?" width="60%"></Input>
                   
                   <Button onClick={handleSearch}><BsSearch/></Button>

                <Box style={{width:"10%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <b><Routerlink style={{ textDecoration: "none", color: 'black' }} to={'/login'}>SIGNIN</Routerlink></b>
                    <AiOutlineUser size={40} />
                    <Link to={'/cart'}><AiOutlineShoppingCart size={40} /></Link>
                </Box>
            </Flex>
            <Flex style={{ background: "black", color: "whitesmoke", padding: "1%", justifyContent: "space-evenly", border: "1px solid black" }} className='Nav'>
                <b><Routerlink className='navcomp' to={'/'} >Home</Routerlink></b>
                <b><Routerlink className='navcomp' to={'/products'}>All in 1</Routerlink></b>
                <b><Routerlink className='navcomp' to={'/products/furniture'}>Furniture</Routerlink></b>
                <b><Routerlink className='navcomp' to={'/products/laptops'}>Gadgets</Routerlink></b>
                <b><Routerlink className='navcomp' to={'/register'}>Register</Routerlink></b>
                <b className='navcomp'>Kitchen</b>
                <b className='navcomp'>Dining</b>
                <b className='navcomp'>Storage&Cleaning</b>
                <b className='navcomp'>Home Decor</b>
                <b className='navcomp'>Windows&Curtains</b>
                <b className='navcomp'>Health</b>
                {/* <b className='navcomp'>Gift</b> */}
                {!isAdmin?(<b className='navcomp'>Gift</b>):(<Routerlink to={"/adminDashboard"}><b className='navcomp'>Dashboard</b></Routerlink>)}
                {!isAuth ? "" : (<b onClick={logout} className='navcomp'>Logout</b>)}
                {!isAdmin ? "" : (<b onClick={adminlogout} className='navcomp'>Logout</b>)}
            </Flex>
        </Box>
    )
}

export default Navbar
