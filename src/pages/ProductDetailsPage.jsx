import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});


  // get productId from URL
  const { productId } = useParams();



  // useEffect runs when productId changes
  useEffect(() => {
    // fetch product details from API
    axios.get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        // save product in state
        setProduct(response.data);
      })
      .catch((error) => {
        // show error in console
        console.log(error);
      });
  }, [productId]); // run when productId changes



  return (
    <div className="ProductDetailsPage">
      {/* Show product details */}
      <h2>{product.title}</h2> {/* product name */}
      <img src={product.image} alt={product.title} width="100" /> {/* product image */}
      <p>{product.description}</p> {/* product description */}
      <p>Price: ${product.price}</p> {/* product price */}
    </div>
  );
}

export default ProductDetailsPage;
