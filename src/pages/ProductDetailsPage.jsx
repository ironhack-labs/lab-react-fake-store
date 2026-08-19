import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const { productId } = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    getData()
  }, [productId])
  const getData = async() => {
    const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
    setProduct(response.data)
  }

  const handleButtonClick = () => {
    navigate("/")
  }
 
  return (
    <div className="product-details-page">
      <img src={product.image} />
      <h1> {product.title} </h1>
      <p> {product.description} </p>
      <p> {product.price} </p>
      <button className="btn-secondary" onClick={handleButtonClick}> Back </button>
    </div>
  );
}

export default ProductDetailsPage;
