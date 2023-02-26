import { Box, Button, Input } from '@chakra-ui/react'
import React, { useState } from 'react'


const initistate = {
  title: "", brand: "", category: "",
  description: "", discountPercentage: +(""), price: +(""),
  rating: +(""), stock: +(""), thumbnail: ""
}
const Admindashboard = () => {
  const [formState, setFormState] = useState(initistate)
  const { title, brand, category, description, discountPercentage, price, rating, stock, thumbnail } = formState

  const handleForm = (e) => {
    const { name, value } = e.target
    setFormState({ ...formState, [name]: value })
  }

  const handleAddProduct = () => {
    fetch('https://dummyjson.com/products/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formState)
    })
      .then(res => res.json())
      .then((success) => console.log(success))

    setFormState(initistate)
  }
  return (
    <div>
      <Box width={"60%"} margin="auto">
        <Input style={{ marginBottom: "3%" }} name="title" value={title} type="text" placeholder="Enter Title" onChange={handleForm} />
        <Input style={{ marginBottom: "3%" }} name="brand" value={brand} type="text" placeholder="Enter Brand" onChange={handleForm} />
        <Input style={{ marginBottom: "3%" }} name="category" value={category} type="text" placeholder="Enter Category" onChange={handleForm} />
        <Input style={{ marginBottom: "3%" }} name="description" value={description} type="text" placeholder="Enter Description" onChange={handleForm} />
        <Input style={{ marginBottom: "3%" }} name="thumbnail" value={thumbnail} type="text" placeholder="Enter Image Link" onChange={handleForm} />
        <Input style={{ marginBottom: "3%" }} name="price" value={price} type="text" placeholder="Enter Price" onChange={handleForm} />
        <Input style={{ marginBottom: "3%" }} name="discountPercentage" value={discountPercentage} type="text" placeholder="Enter DiscountPercentage" onChange={handleForm} />
        <Input style={{ marginBottom: "3%" }} name="rating" value={rating} type="text" placeholder="Enter Rating" onChange={handleForm} />
        <Input style={{ marginBottom: "3%" }} name="stock" value={stock} type="text" placeholder="Enter Stock" onChange={handleForm} />
        <Button onClick={handleAddProduct}>ADD PRODUCT</Button>
      </Box>
    </div>
  )
}

export default Admindashboard
