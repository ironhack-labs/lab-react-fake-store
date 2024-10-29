import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const { productId } = useParams(); 
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios
    .get(`https://fakestoreapi.com/products/${productId}`)
    .then((response) => {
      setProduct(response.data);
     
    })
    .catch((error) => {
      console.log(error);
     
    });
  },[productId])
  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.


  // To fetch the product details, set up an effect with the `useEffect` hook:



  return (
    <div className="ProductDetailsPage">
    {/* Render product details here */}
    <h1>{product.title}</h1>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <img src={product.image} alt={product.title} />
          <Link to="/"> 
            <button>Back </button>
          </Link>
    </div>
  );
}

export default ProductDetailsPage;
