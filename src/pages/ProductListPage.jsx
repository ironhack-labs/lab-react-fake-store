import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { Card, CardBody, CardFooter, Stack, Heading, Text, Button } from '@chakra-ui/react'


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
useEffect(() => {
axios.get("https://fakestoreapi.com/products")
.then((response) => {
  console.log(response)
  setProducts(response.data)
})
.catch((error) => {
  console.log(error)
})
}, [])

  return (
    <div className="ProductListPage">
      {
        products && products.map((product) => {
          return (
            <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  key={product.id}
>
  <img height="100px" width="200px" src={product.image}></img>
  

  <Stack>
    <CardBody display="flex" alignItems="center">
      <Heading size='md'>{product.title}</Heading>

      <Text py='2'>{product.category}</Text>
      <Text py='2'>{product.price}</Text>
      <Text py='2'>{product.description}</Text>
    </CardBody>
    <CardFooter>
      <Link to={`/products/details/${product.id}`}>
    <Button colorScheme="teal">Details</Button>
    </Link>
    </CardFooter>
   

  </Stack>
</Card>
          )
        })
      }
    </div>
  );
}

export default ProductListPage;
