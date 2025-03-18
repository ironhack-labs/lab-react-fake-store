import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const { productId }= useParams()

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${productId}`)
    .then((response) => setProduct(response.data))
    .catch((error) => console.log(error))
  }, [productId])


  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.


  // To fetch the product details, set up an effect with the `useEffect` hook:
  return (
    <div className="ProductDetailsPage">
       <div key={product.id}>
            <img src={product.image} />
            <p>{product.title}</p>
            <p>{product.category}</p>
            <p>{product.price}$</p>
            <p>{product.description}</p>
            <Link to ='/'>
            <button id='btn-shop'>Continue Shopping</button>
            </Link>
          </div>
    </div>
  );
}

export default ProductDetailsPage;
