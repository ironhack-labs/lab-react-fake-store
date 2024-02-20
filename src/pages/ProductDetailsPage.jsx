import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const params = useParams()
  
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.productId}`) //este para es el nombre que l e dimos en app
    .then ((response) => {
      return response.json()
    })
    .then((response) => {
      setProduct(response)
    })
    .catch((error) => {
      console.log(error)
    })
  },[params.id])

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.


  // To fetch the product details, set up an effect with the `useEffect` hook:



  return (
    <div className="ProductDetailsPage">
    {/* Render product details here */}
    <img src={product.image} width="300px" alt="image-product" />

    <label className="label-category">{product.category}</label>
    
    <h1 className="h1-detailspage">{product.title}</h1>

    <div className="parrafos">
      <p className="p1">{product.description}</p>
      <p className="p2">${product.price}</p>
    </div>
    <Link to={"/"}>
    <button className="btn-back">Back</button>
    </Link>
    </div>

    
  );
}

export default ProductDetailsPage;
