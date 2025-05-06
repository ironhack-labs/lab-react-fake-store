import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios"

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const { productId } = useParams()
  const nav = useNavigate()

  const handleBack = () => {
    nav("/")
  }
  // To fetch the product details, set up an effect with the `useEffect` hook:

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
    console.log(response.data)
    setProduct(response.data)
    })
    .catch(err => console.log("was an error with the product", err)) 
  }, [productId])



  return (
    <div className="ProductDetailsPage">
    <h1>DETAIL PAGE</h1>
    <img className="imagens" src={product.image} alt={product.name} style={{height: '300px'}}/>
    <h3>{product.title}</h3>
    <h3>Category : {product.category}</h3>
    <h3>Description: {product.description}</h3>
    <h3>Price: {product.price}</h3>
    <button className="buttonBack" onClick={handleBack}>Back</button>
    </div>
  );
}

export default ProductDetailsPage;
