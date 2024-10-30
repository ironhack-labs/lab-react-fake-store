import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";



function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
        console.log(response)
      })
      .catch((error) => {
        console.log('Error getting product details from the API...', error);
      });
  }, [productId]);


  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.


  // To fetch the product details, set up an effect with the `useEffect` hook:



  return (

      <div className="productDetailsPage">
        <div className="productDetailsContainer">
        <img src={product.image} alt={product.title} width="100"/>
          <p className="productTitle">{product.title}</p>
          <p className="productPrice">{product.price}</p>
          <p className="productCategory">{product.category}</p>
          <p className="productDescription">{product.description}</p>
        </div>
      </div>
  );
}

export default ProductDetailsPage;


