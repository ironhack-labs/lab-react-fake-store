import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import './ProductDetailsPage.css'

function ProductDetailsPage() {
  const { productId } = useParams();

  const API_URL = `https://fakestoreapi.com/products/${productId}`;

  const [product, setProduct] = useState({});


  const fetchProduct = () => {
    axios.get(API_URL).then(response => {
      setProduct(response.data);
    })
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div className="ProductDetailsPage">
      <img src={product.image} alt="image" />
      <p className="title">{product.title}</p>
      <p className="category">{product.category}</p>
      <div className="container">
        <p>{product.description}</p >
        <p>{product.price}</p >
      </div>
    </div>
  );
}

export default ProductDetailsPage;
