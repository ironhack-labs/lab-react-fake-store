import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const { productId } = useParams();

  const [product, setProduct] = useState({});


  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.


  // To fetch the product details, set up an effect with the `useEffect` hook:


  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then(response => {
        setProduct(response.data)
        console.log(response.data)
      })
      .catch(e => {
        console.log("error not found")
      })
  }, [productId])



  return (
    <div className="ProductDetailsPage">
      <h2>{product.title}</h2>
      <img className="product-img" alt="product" src={product.image} />
      <h4>{product.category}</h4>
      <h4>{product.price}</h4>
      <p>{product.description}</p>
      <br />
      <Link to="/">Back to Homepage</Link>
    </div >
  );
}

export default ProductDetailsPage;
