import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./ProductListPage.css"

const apiURL = "https://fakestoreapi.com/products";

function ProductDetailsPage() {
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    axios.get(`${apiURL}/${productId}`).then(response => setProduct(response.data)).catch(error => console.log("this error:", error));
    return () => { };
  }, [productId]);

  return (
    <div className="ProductDetailsPage">
      <div className="major-container">
        <img className="container-part" src={product.image} alt="" />
        <p className="container-part"><span className="boldq">{product.title}</span></p>
        <p className="container-part">{product.category}</p>
        <p className="container-part">$ {product.price}</p>
        <p className="container-part">{product.description}</p>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
