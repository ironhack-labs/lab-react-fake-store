// import Axios
import axios from "axios";
//  impost useeEffect - a react hook
import { useState, useEffect } from "react";
// Move from one page to another
import { Link } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

function ProductList() {
  const [productsDetails, setProductsDetails] = useState(null);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        console.log(response);
        setProductsDetails(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {productsDetails &&
        productsDetails.map((products) => {
          return (
            <Box key={products.id} mt="75px" ml="50px" mr="50px">
              <Link to={`/product/details/${products.id}`}>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  columnGap="75px"
                >
                  <img src={products.image} className="images" />
                  {/* </Box>
              <Box display="flex"> */}
                  <h1>{products.title}</h1>
                  <h3>{products.category}</h3>
                  <h2>
                    <b>{products.price}€</b>
                  </h2>
                  <h3>{products.description}</h3>
                </Box>
              </Link>
            </Box>
          );
        })}
    </div>
  );
}

export default ProductList;
