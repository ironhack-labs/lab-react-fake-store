import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const {productId} = useParams()
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)


  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${productId}`)
    .then((response) => {
      setProduct(response.data)
      setLoading(false)
    })
    .catch((error) => {
      setError(error)
      setLoading(false)
    })
  }, [productId])

  if(loading) return <p>Loading...</p>
  if(error) return <p>{error}</p>

  // To fetch the product details, set up an effect with the `useEffect` hook:



  return (
    <>
    <div className="ProductDetailsPage">
    {/* Render product details here */}
    <img src={product.image} alt={product.title}></img>
    <h3 id="tag">{product.category}</h3> 
    <h1>{product.title}</h1>
    <div id="row">
      <p>{product.description}</p>
      <h3>${product.price}</h3>
    </div>
    
    </div>
    <div id="backButton">
      <Link to={"/"}><button>Back</button></Link>
    </div>
    </>
  );
}

export default ProductDetailsPage;
