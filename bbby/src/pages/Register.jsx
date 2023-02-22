import { Box, Flex, Heading } from '@chakra-ui/layout'
import { Button, Img, Input } from '@chakra-ui/react'
import React, { useState, useContext } from 'react'
import { AiFillApple } from 'react-icons/ai'
import { AiOutlineGoogle } from 'react-icons/ai'
import { AiFillFacebook } from 'react-icons/ai'
import axios from 'axios'
import { Authcontext } from '../context/Authcontextprovider'
import { Navigate,Link } from 'react-router-dom'

const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { register, isReg } = useContext(Authcontext)

    const handleLogin = () => {
        axios({
            method: 'post',
            url: 'https://reqres.in/api/register',
            data: { email, password }
        }).then((res) => register(res.data.token))

    }

    if (isReg) { return <Navigate to={'/login'} /> }


    return (
        <Box marginTop={"18%"} backgroundColor={"#f8f8f8"}>
            <Flex style={{ backgroundColor: "white", padding: "2%", width: "40%", margin: "auto", marginTop: "2%", flexDirection: "column" }}>
                <Img src='https://b3h2.scene7.com/is/image/BedBathandBeyond/WR_deskstop_22_07_2022?$content$&wid=1280' />
                <Heading style={{ color: "#0040ff" }}>Create Account</Heading>
                <Input onChange={(e) => setEmail(e.target.value)} type={"email"} marginBottom={"1%"} padding={"3%"} placeholder='Enter Email' />
                <Input onChange={(e) => setPassword(e.target.value)} type={"password"} marginBottom={"1%"} padding={"3%"} placeholder='Enter Password' />
                <Button onClick={handleLogin} fontSize={"20px"} border={"0px"} backgroundColor={"#0040ff"} color="white" padding={"3%"}>SIGN UP</Button>
                <br></br>
                <Link style={{ color: "#0040ff" }} to={'/login'}>ALREADY HAVE AN ACCOUNT</Link>
                <br></br>
                <Box marginBottom={"1%"} display={"flex"} alignItems="center" justifyContent={"center"} padding={"1%"} border={"1px solid grey"}>
                    <AiFillApple size={30} />
                    <b>Continue With Apple</b>
                </Box>
                <Box marginBottom={"1%"} display={"flex"} alignItems="center" justifyContent={"center"} padding={"1%"} border={"1px solid grey"}>
                    <AiOutlineGoogle size={30} />
                    <b>Continue With Google</b>
                </Box>
                <Box marginBottom={"1%"} display={"flex"} alignItems="center" justifyContent={"center"} padding={"1%"} border={"1px solid grey"}>
                    <AiFillFacebook size={30} />
                    <b>Continue With Facebook</b>
                </Box>
            </Flex>
        </Box>
    )
}

export default Register
