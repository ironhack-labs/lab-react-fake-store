import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom"
import axios from "axios"
import "./ProductDetailsPage.css"


function ProductDetailsPage() {

  const { productId } = useParams();
  const [product, setProduct] = useState(null);


useEffect (() => {
  axios.get(`https://fakestoreapi.com/products/${productId}`)
  .then(response => setProduct(response.data))
  .catch(error => console.error("error fetching product details", error));
}, [productId]);



  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="ProductDetailsPage">
      <div>
        <h1> Product Details {productId}</h1>
        <img src={product.image} alt={product.name} />
        <p> {product.description}</p>
        <p> {product.price}</p>
        <p> {product.category}</p>
        <p> {product.rating.rate}</p>
        <p> {product.rating.count}</p>
        <Link to="/">Back to Product List</Link>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
