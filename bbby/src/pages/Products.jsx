import React, { useEffect, useState } from 'react'
import { Box, Heading, Img, Button, Text, Spinner } from '@chakra-ui/react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Wiper from '../components/swiper'


const Products = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(0)


  const fetchAndUpdateData = (page) => {
    setLoading(true)
    axios.get(`https://api.escuelajs.co/api/v1/products?offset=${page}&limit=30`)
      .then((res) => {
        setLoading(false)
        console.log(res.data)
        setProducts(res.data)
      })
  }

  const handlePage = (val) => {
    setPage(page + val)
  }

  useEffect(() => {
    fetchAndUpdateData(page)
  }, [page])


if(loading){return <Spinner marginTop={"25%"} />}

  return (
    <Box marginTop={"18%"}>
      <Wiper/>
      <Box display={"flex"} >
        <Box border={"1px solid grey"} width={"20%"}>hello</Box>
        <Box display={"grid"} gridTemplateColumns="repeat(3,1fr)" gap={"20px"} width={"80%"}>
          {products.map((e) => {
            return <Link style={{ textDecoration: "none" }} key={e.id} to={`/products/${e.id}`}>
              <Box fontFamily={"sans-serif"} boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" padding={"3%"}>
                <Img boxSize={300} src={e.images[0]} />
                <Heading fontStyle={"oblique"} color={"black"}>{e.title}</Heading>
                <Heading fontFamily={"serif"} color={"black"}>${e.price}</Heading>
                <Text noOfLines={2} color={"GrayText"}>{e.description}</Text>
                <Text color={"GrayText"}>Rating:{Math.ceil((Math.random()) * 5)}</Text>
              </Box>
            </Link>
          })}
        </Box>
      </Box>
      <Box marginTop={"2%"}>
        <Button padding={"1%"} border="0px" backgroundColor={"black"} color="chartreuse" fontSize={"15px"} marginRight={"1%"} isDisabled={page === 0} onClick={() => handlePage(-1)}>PREV</Button >
        <Button padding={"1%"} border="0px" backgroundColor={"black"} color="chartreuse" fontSize={"15px"} marginRight={"1%"}>{page + 1}</Button >
        <Button padding={"1%"} border="0px" backgroundColor={"black"} color="chartreuse" fontSize={"15px"} marginRight={"1%"} onClick={() => handlePage(1)}>Next</Button>
      </Box>
    </Box>
  )
}

export default Products
