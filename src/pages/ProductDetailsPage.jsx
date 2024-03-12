import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});

const {productId} = useParams();
  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${productId}`)
    .then((response) => {
      setProduct(response.data)
    })
    .catch((err)=> console.log(err))
  },[productId])

  // To fetch the product details, set up an effect with the `useEffect` hook:

if(!product){
  return <p>Loading...</p>
}

  return (
    <div className="ProductDetailsPage">
    {/* Render product details here */}
    <img src={product.image} alt="" style={{height: "300px"}}/>
    <h3>{product.title}</h3>
    {/* <Link></Link> */}
    </div>
  );
}

export default ProductDetailsPage;
