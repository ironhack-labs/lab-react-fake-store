import { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState(null);

  const {productId} = useParams();

  const apiBaseUrl = `https://fakestoreapi.com`;


  useEffect(() => {

    axios
      .get(`${apiBaseUrl}/products/${productId}`)
      .then(result => setProduct(result.data));

  },[])



  // To fetch the product details, set up an effect with the `useEffect` hook:



  return (
    <div className="ProductDetailsPage">
      <h2>{product?.title}</h2>
      <img src={product?.image} />
      <p>{product?.category}</p>
      <p>{product?.price}</p>
      <p>{product?.description}</p>
      <Link to="/"><button>Back</button></Link>
    </div>
  );
}

export default ProductDetailsPage;
