import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./ProductDetailPage.css";

function ProductDetailsPage() {
  const [product, setProduct] = useState({});

  let { productId } = useParams();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [productId]);

  return (
    <div className="ProductDetailsPage">
      <div className="product-card">
        <img src={product.image} className="image"></img>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
      </div>
      <Link to="/">
        <button className="home-page-button">TO HOME PAGE</button>
      </Link>
    </div>
  );
}

export default ProductDetailsPage;
