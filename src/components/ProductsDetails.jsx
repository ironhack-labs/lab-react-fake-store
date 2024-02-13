// import Axios
import axios from "axios";
//  impost useeEffect - a react hook
import { useState, useEffect } from "react";
// Move from one page to another
import { Link } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

function ProductsDetails() {
  const [currentProduct, setCurrentProduct] = useState([]);
  const { productId } = useParams();
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        console.log(response);
        setCurrentProduct(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [productId]);

  return (
    <div>
      {currentProduct && (
        <article key={currentProduct.id}>
          <Box display="flex" justifyContent="center" mt="75px">
            <img src={currentProduct.image} className="images" />
          </Box>

          <h1>{currentProduct.title}</h1>
          <h3>{currentProduct.category}</h3>
          <h2>
            <b>{currentProduct.price}€</b>
          </h2>
          <h3>{currentProduct.description}</h3>
        </article>
      )}
    </div>
  );
}

export default ProductsDetails;
