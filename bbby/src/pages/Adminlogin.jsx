import { Box, Button, Heading, Input ,useToast} from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { Authcontext } from '../context/Authcontextprovider'

const Adminlogin = () => {


   const[email,setEmail]=useState("")
   const[password,setPassword]=useState("")
   const toast=useToast()
   const {isAdmin,adminlogin}=useContext(Authcontext)

   const handleAdminLogin=()=>{
    if(email==="admin@fake.com"&&password==="1234")
    {   adminlogin()
        return toast({
        title: 'Admin Login Successful',
        description: "",
        status: 'success',
        duration: 5000,
        isClosable: true,
        position:'top'
      })}
   }

   if(isAdmin){return <Navigate to={"/adminDashboard"}/>}

    return (
        <Box style={{marginTop:"5%"}} boxShadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px" padding={"3%"} margin={"auto"} width="40%">
            <Heading backgroundColor={"black"} color={"chartreuse"} marginBottom={"4%"}>WELCOME ADMIN</Heading>
            <Input type={"email"} onChange={(e)=>setEmail(e.target.value)} marginBottom={"4%"} placeholder="Enter Email" />
            <Input type={"password"} onChange={(e)=>setPassword(e.target.value)}  marginBottom={"4%"} placeholder="Enter Password" />
            <Button onClick={handleAdminLogin} backgroundColor={"black"} color={"chartreuse"}>LOG IN</Button>
        </Box>
    )
}

export default Adminlogin
