import React, { useEffect, useState } from 'react'
// import './App.css';
import { Box, Heading, Img, Button, Text, Spinner, Center, Input } from '@chakra-ui/react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Wiper from '../components/swiper'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
import { Radio, RadioGroup, Stack } from '@chakra-ui/react'
import Footer from '../components/Footer'



const Furniture = () => {
  const [products, setProducts] = useState([])
  const [brandproduct, setBrandproduct] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(0)
  const [total, setTotal] = useState(0)



  const limit = 30
  const lastpage = Math.floor(total / limit)
  console.log(lastpage)

  const fetchAndUpdateData = (page) => {
    setLoading(true)
    axios.get(`https://dummyjson.com/products/category/furniture`)
      .then((res) => {
        setLoading(false)
        console.log(res.data)
        setTotal(res.data.total)
        setProducts(res.data.products)
        setBrandproduct(res.data.products)
      })
}
  
  const cancelFilters=()=>{
    setLoading(true)
    axios.get(`https://dummyjson.com/products?limit=30&skip=${page * 30}`)
      .then((res) => {
        setLoading(false)
        console.log(res.data)
        setTotal(res.data.total)
        setProducts(res.data.products)
        setBrandproduct(res.data.products)
      })
  }



  const handleCategory = (category) => {
    setLoading(true)
    axios.get(`https://dummyjson.com/products/category/${category}`)
      .then((res) => {
        setLoading(false)
        console.log(res.data)
        setTotal(res.data.total)
        setProducts(res.data.products)
      })
  }

  const handleBrand = (Brand) => {
    const brandedproducts = brandproduct.filter((e) => e.brand === Brand)
    setProducts(brandedproducts)
  }

  const handleSort = (value) => {
    const toBeSortedArray = [...products]
    if (value === "2") {
      const sortedProducts = toBeSortedArray.sort((a, b) => { return a.price - b.price })
      setProducts(sortedProducts)
    }
    else if (value === "3") {

      const sortedProducts = toBeSortedArray.sort((a, b) => { return b.price - a.price })
      setProducts(sortedProducts)

    }
    else { fetchAndUpdateData(page) }

  }


  const handlePage = (val) => {
    setPage(page + val)
  }

  useEffect(() => {
    fetchAndUpdateData(page)
  }, [page])


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
    <Box marginTop={"5%"}>
      <Wiper />
      <Box marginTop={"5%"} display={"flex"} >
        <Box display={"flex"} flexDirection="column" border={"1px solid grey"} width={"20%"}>
          <Box>
            <Text fontSize={"3xl"}>Filters</Text>
            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                      <Text fontSize={"2xl"}> Categories</Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text _hover={{ cursor: "pointer", textAlign: "center" }} onClick={cancelFilters} padding={"1%"} boxShadow="rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;" fontSize={"xl"} textAlign='left'>All Products</Text>
                  <Text _hover={{ cursor: "pointer", textAlign: "center" }} onClick={(e) => handleCategory(e.target.innerText)} padding={"1%"} boxShadow="rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;" fontSize={"xl"} textAlign='left'>smartphones</Text>
                  <Text _hover={{ cursor: "pointer", textAlign: "center" }} onClick={(e) => handleCategory(e.target.innerText)} padding={"1%"} boxShadow="rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;" fontSize={"xl"} textAlign='left'>laptops</Text>
                  <Text _hover={{ cursor: "pointer", textAlign: "center" }} onClick={(e) => handleCategory(e.target.innerText)} padding={"1%"} boxShadow="rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;" fontSize={"xl"} textAlign='left'>fragrances</Text>
                  <Text _hover={{ cursor: "pointer", textAlign: "center" }} onClick={(e) => handleCategory(e.target.innerText)} padding={"1%"} boxShadow="rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;" fontSize={"xl"} textAlign='left'>furniture</Text>
                  <Text _hover={{ cursor: "pointer", textAlign: "center" }} onClick={(e) => handleCategory(e.target.innerText)} padding={"1%"} boxShadow="rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;" fontSize={"xl"} textAlign='left'>home-decoration</Text>
                  <Text _hover={{ cursor: "pointer", textAlign: "center" }} onClick={(e) => handleCategory(e.target.innerText)} padding={"1%"} boxShadow="rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;" fontSize={"xl"} textAlign='left'>sunglasses</Text>
                  <Text _hover={{ cursor: "pointer", textAlign: "center" }} onClick={(e) => handleCategory(e.target.innerText)} padding={"1%"} boxShadow="rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;" fontSize={"xl"} textAlign='left'>mens-watches</Text>
                  <Text _hover={{ cursor: "pointer", textAlign: "center" }} onClick={(e) => handleCategory(e.target.innerText)} padding={"1%"} boxShadow="rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;" fontSize={"xl"} textAlign='left'>lighting</Text>
                  <Text _hover={{ cursor: "pointer", textAlign: "center" }} onClick={(e) => handleCategory(e.target.innerText)} padding={"1%"} boxShadow="rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;" fontSize={"xl"} textAlign='left'>womens-jewellery</Text>
                  <Text _hover={{ cursor: "pointer", textAlign: "center" }} onClick={(e) => handleCategory(e.target.innerText)} padding={"1%"} boxShadow="rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;" fontSize={"xl"} textAlign='left'>mens-shoes</Text>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                      <Text fontSize={"2xl"}>Brand</Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text onClick={(e) => handleBrand(e.target.innerText)} _hover={{ cursor: "pointer", textAlign: "center" }} padding={"1%"} boxShadow="rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;" fontSize={"xl"} textAlign='left'>Apple</Text>
                  <Text onClick={(e) => handleBrand(e.target.innerText)} _hover={{ cursor: "pointer", textAlign: "center" }} padding={"1%"} boxShadow="rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;" fontSize={"xl"} textAlign='left'>Samsung</Text>
                  <Text onClick={(e) => handleBrand(e.target.innerText)} _hover={{ cursor: "pointer", textAlign: "center" }} padding={"1%"} boxShadow="rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;" fontSize={"xl"} textAlign='left'>Fog</Text>
                  <Text onClick={(e) => handleBrand(e.target.innerText)} _hover={{ cursor: "pointer", textAlign: "center" }} padding={"1%"} boxShadow="rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;" fontSize={"xl"} textAlign='left'>Rolex</Text>
                  <Text onClick={(e) => handleBrand(e.target.innerText)} _hover={{ cursor: "pointer", textAlign: "center" }} padding={"1%"} boxShadow="rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;" fontSize={"xl"} textAlign='left'>Bombay dyeing</Text>

                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                      <Text fontSize={"2xl"}>Price</Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text _hover={{ cursor: "pointer", textAlign: "center" }} padding={"1%"} boxShadow=" rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;" fontSize={"xl"} textAlign='left'>{"<$50"}</Text>
                  <Text _hover={{ cursor: "pointer", textAlign: "center" }} padding={"1%"} boxShadow=" rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;" fontSize={"xl"} textAlign='left'>{"$50-$100"}</Text>
                  <Text _hover={{ cursor: "pointer", textAlign: "center" }} padding={"1%"} boxShadow=" rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;" fontSize={"xl"} textAlign='left'>{"$100-$500"}</Text>
                  <Text _hover={{ cursor: "pointer", textAlign: "center" }} padding={"1%"} boxShadow=" rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;" fontSize={"xl"} textAlign='left'>{"$1000&above..."}</Text>

                </AccordionPanel>
              </AccordionItem>

            </Accordion>
          </Box>

          <Box>
            <Text fontSize={"3xl"}>Sort By</Text>
            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                      <Text fontSize={"2xl"}>Price</Text>

                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <RadioGroup defaultValue='1'>
                    <Stack spacing={4} direction='column'>
                      <Radio onChange={(e) => handleSort(e.target.value)} value='1' >
                        None
                      </Radio>
                      <Radio onChange={(e) => handleSort(e.target.value)} value='2'>LTH</Radio>
                      <Radio onChange={(e) => handleSort(e.target.value)} value='3'>HTL</Radio>
                    </Stack>
                  </RadioGroup>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>

          </Box>

        </Box>
        <Box display={"grid"} gridTemplateColumns="repeat(3,1fr)" gap={"20px"} width={"80%"}>
          {products.map((e) => {
            return <Link style={{ textDecoration: "none" }} key={e.id} to={`/products/${e.id}`}>
              <Box fontFamily={"sans-serif"} boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" padding={"3%"}>
                <Center><Img boxSize={300} src={e.thumbnail} /></Center>
                <Text noOfLines={1} fontSize='2xl' fontStyle={"oblique"} color={"black"}>{e.title}</Text>
                <Heading fontFamily={"serif"} color={"black"}>${e.price}</Heading>
                <Text noOfLines={2} color={"GrayText"}>{e.category}</Text>
                <Text color={"GrayText"}>Rating:{e.rating}</Text>
              </Box>
            </Link>
          })}
        </Box>
      </Box>
      <Box marginTop={"2%"}>
        <Button padding={"1%"} border="0px" backgroundColor={"black"} color="chartreuse" fontSize={"15px"} marginRight={"1%"} isDisabled={page === 0} onClick={() => handlePage(-1)}>PREV</Button >
        <Button padding={"1%"} border="0px" backgroundColor={"black"} color="chartreuse" fontSize={"15px"} marginRight={"1%"}>{page + 1}</Button >
        <Button padding={"1%"} border="0px" backgroundColor={"black"} color="chartreuse" fontSize={"15px"} marginRight={"1%"} isDisabled={page === lastpage} onClick={() => handlePage(1)}>Next</Button>
      </Box>
      <Footer/>
    </Box>
  )
}

export default Furniture
