import React, { useContext } from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
// import { Img } from '@chakra-ui/react'
import { Box, Flex, Text, Heading, Img, Button, Spinner } from '@chakra-ui/react'
import { IoIosArrowBack } from 'react-icons/io'
import { Cartcontext } from '../context/Cartcontext'
import { useToast } from '@chakra-ui/react'

const SingleProduct = () => {
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(false)
  const { cartData, setCartData } = useContext(Cartcontext)
  const toast=useToast()
  const { id } = useParams()
  const fetchAndUpdateData = async (id) => {
    setLoading(true)
    try {
      const data = await axios.get(`https://dummyjson.com/products/${id}`)
      // .then((res) => {
      // console.log(res.data)
      //   setProduct(res.data)
      // })
      setLoading(false)
      console.log(data.data)
      setProduct(data.data)
    } catch (error) {
      setLoading(false)

      console.log(error)
    }
  }

  useEffect(() => {
    fetchAndUpdateData(id)
  }, [id])

  const handleCartData = () => {
    setCartData([...cartData,product])
    return  toast({
      title: 'Product Added Successfully',
      description: "Happy Shopping",
      status: 'success',
      duration: 5000,
      isClosable: true,
      position:'top'
    })
  }

  if (loading) {
    return <Spinner
      thickness='4px'
      speed='0.65s'
      emptyColor='gray.200'
      color='blue.500'
      size='xl'
      marginTop={"5%"}
    />
  }

  return (
    <Box textAlign={"left"}>
      <Link to={"/products"}><Button leftIcon={<IoIosArrowBack />} marginLeft="7%" color={"chartreuse"} backgroundColor={"black"} padding={"1%"}>Back</Button></Link>
      <Flex justifyContent={"space-evenly"} padding={"3%"}>
        <Box width={"35%"} boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" padding={"2%"} border={"0px solid gray"}>
          {<Img boxSize={500} src={product.thumbnail} />}
        </Box>
        <Box textAlign={"center"} width={"60%"}>
          <Heading marginBottom={"4%"}>{product.title}</Heading>
          <Text color={"rgb(100, 200, 0)"} fontSize={"xl"}>{product.description}</Text>
          <Text color={"rgb(100, 200, 0)"} noOfLines={5} fontSize={"xl"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a tellus quis justo ultrices elementum. Curabitur aliquam placerat nulla et lacinia. Suspendisse tellus eros, varius id consequat in, ultrices vitae enim. Curabitur non euismod nulla, vitae feugiat nisi. Integer facilisis sit amet justo nec fermentum. Praesent nec euismod est. Donec euismod et mi non dignissim. Phasellus rutrum orci mi, ac bibendum augue aliquam vitae. Fusce eget nulla dui. Integer imperdiet felis nec purus imperdiet, a maximus ipsum laoreet. Suspendisse sollicitudin luctus justo in pharetra. Aliquam vulputate velit id sodales convallis. Aenean efficitur augue sed nunc molestie, nec pharetra risus dapibus. </Text>
          <hr style={{ color: "black", height: "20px" }} />
          <Heading>Price:<span style={{ color: "rgb(100, 200, 0)" }}>${product.price}</span><span style={{ fontStyle: "oblique", textDecoration: "line-through" }}>(${Math.ceil(product.price / (1 - product.discountPercentage / 100))})</span></Heading>
          <Box flexDirection={"column"} padding={"2%"} display={"flex"} alignItems="flex-start">
            <Text fontSize={"2xl"}><span style={{ color: "rgb(100, 200, 0)" }}>Category:</span>{product.category}</Text>
            <Text fontSize={"2xl"}><span style={{ color: "rgb(100, 200, 0)" }}>Brand:</span>{product.brand}</Text>
            <Text fontSize={"2xl"}><span style={{ color: "rgb(100, 200, 0)" }}>Rating:</span>{product.rating}/5</Text>
            <Text fontSize={"2xl"}><span style={{ color: "rgb(100, 200, 0)" }}>Discount:</span>{product.discountPercentage}%</Text>
            <Text fontSize={"2xl"}><span style={{ color: "rgb(100, 200, 0)" }}>Left in Stock:</span>{product.stock}</Text>
          </Box>
          <Button onClick={handleCartData} color={"chartreuse"} backgroundColor={"black"} padding={"1%"}>ADD TO CART</Button>
        </Box>
      </Flex>
    </Box>
  )
}

export default SingleProduct
