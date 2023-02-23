import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Flex, Grid, Image, Img } from '@chakra-ui/react'


const SingleProduct = () => {
  const [product, setProduct] = useState({})

  const { id } = useParams()
  const fetchAndUpdateData = async (id) => {
    try {
      const data = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`)
      // .then((res) => {
      //   // console.log(res.data)
      //   setProduct(res.data)
      // })
      console.log(data.data)
      setProduct(data.data)
    } catch (error) {
     console.log(error)
    }
  }

  useEffect(() => {
    fetchAndUpdateData(id)
  }, [id])

  console.log(product)

  return (<></>
    // <>
    //   <Flex>
    //     <Grid templateColumns={"repeat(2,1fr)"} gap="20px">
    //       {/* <Img src={product.images[0]}/> */}
    //       <h1>{product.price}</h1>
    //     </Grid>
    //     <Box></Box>
    //   </Flex>
    // </>
  )
}

export default SingleProduct
