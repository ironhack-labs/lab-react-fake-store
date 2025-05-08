import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetailsPage() {
  const [product, setProduct] = useState({});

  const { productId } = useParams();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
      });
  }, [productId]);

  return (
    <div className="ProductDetailsPage">
      <div key={product.id} className="card">
        <img className="list-image" src={product.image} alt="product" />
        <h3 className="list-title">{product.title}</h3>
        <p className="list-category">{product.category}</p>
        <p className="list-price">${product.price}</p>
        <p className="list-description">{product.description}</p>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
