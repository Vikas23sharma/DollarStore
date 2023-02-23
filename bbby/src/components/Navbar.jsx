import { Box, Center, Flex, Img, Input, InputRightElement, InputGroup } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import Hamburger from 'hamburger-react'
import React from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Link as Routerlink } from 'react-router-dom'
import { Authcontext } from '../context/Authcontextprovider'
import { useContext } from 'react'
import {BsSearch} from 'react-icons/bs'


const Burger = () => { return <Icon as={Hamburger} /> }

// const links=[{to:'/',title:'HOME'},
// {to:'/',title:'HOME'},
// {to:'/accesories',title:'ACCESORIES'},
// {to:'/login',title:'LOGIN'},]



const Navbar = () => {
    const { logout, isAuth } = useContext(Authcontext)
    return (
        <Box style={{ width: "100%", position: "fixed", top: "0", marginBottom: "1%" }}>
            <Box style={{ padding: "5px", backgroundColor: "chartreuse", color: "black" }}><Center>
                Our Easter Sale Is Here.Shop Now!!
            </Center></Box>
            <Box style={{ display: "flex", justifyContent: "space-around", alignItems: "center", padding: "5px", backgroundColor: "black", color: "white" }}>
                <Box><Img width={100} height={50} src='https://stocknews.com/wp-content/uploads/2017/04/bed-bath-beyond-bbby-logo.jpg' /></Box>
                <Box style={{ display: "flex", justifyContent: "space-evenly" }}>
                    <Box><b>Same Day Delivery|</b></Box>
                    <Box><b>Store Pickup</b></Box>
                </Box>
            </Box>
            <Flex style={{
                border: "1px solid black"
                , justifyContent: "space-evenly", padding: "1%", backgroundColor: " chartreuse "
            }}>
                <Box style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Burger />
                    <Routerlink to={'/'}><img width={100} height={50} src='https://stocknews.com/wp-content/uploads/2017/04/bed-bath-beyond-bbby-logo.jpg' alt='logo' /></Routerlink>
                </Box>
                <InputGroup>
                    <Input className='searchbar' padding="1%" borderRadius={20} placeholder="What Product Can We Help You Find?" width="60%"></Input>
                    <InputRightElement children={<BsSearch color='green.500' />} />
                </InputGroup>

                <Box style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <b><Routerlink style={{ textDecoration: "none", color: 'black' }} to={'/login'}>SIGNIN</Routerlink></b>
                    <AiOutlineUser size={40} />
                    <AiOutlineShoppingCart size={40} />
                </Box>
            </Flex>
            <Flex style={{ background: "black", color: "whitesmoke", padding: "1%", justifyContent: "space-evenly", border: "1px solid black" }} className='Nav'>
                <b><Routerlink className='navcomp' to={'/'} >Home</Routerlink></b>
                <b><Routerlink className='navcomp' to={'/products'}>Fashion</Routerlink></b>
                <b><Routerlink className='navcomp' to={'/register'}>Register</Routerlink></b>
                <b className='navcomp'>Kitchen</b>
                <b className='navcomp'>Dining</b>
                <b className='navcomp'>Storage&Cleaning</b>
                <b className='navcomp'>Home Decor</b>
                <b className='navcomp'>Windows&Curtains</b>
                <b className='navcomp'>Furniture</b>
                <b className='navcomp'>Health</b>
                <b className='navcomp'>Gift</b>
                {!isAuth ? "" : (<b onClick={logout} className='navcomp'>Logout</b>)}
            </Flex>
        </Box>
    )
}

export default Navbar
