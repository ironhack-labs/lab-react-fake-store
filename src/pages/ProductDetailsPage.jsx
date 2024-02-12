import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from 'axios';



function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});


  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.

  const {productId} = useParams();


  // To fetch the product details, set up an effect with the `useEffect` hook:

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${productId}`)
    .then((response) => {
      setProduct(response.data);
    })
    .catch((error) => {
      console.log("Error guetting product details from API")
      console.log(error)
    })
    
  }, [productId]);




  return (
    <div className="ProductDetailsPage">
    {/* Render product details here */}
    <h2><b>{product.title}</b></h2>
    <img src={product.image}/>
    <p>{product.description}</p>
    <p>${product.price}</p>

    <Link to="/" className="btn-secondary">Back</Link>


    </div>
  );
}

export default ProductDetailsPage;
