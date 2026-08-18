import { useState, useEffect } from "react";
import axios from "axios";
import "./ProductListPage.css";

function ProductListPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="ProductListPage">
      {products.map((product) => (
        <div className="product-row" key={product.id}>

          <div className="product-image">
            <img src={product.image} alt={product.title} />
          </div>

          <div className="product-title">
            <p>{product.title}</p>
          </div>

          <div className="product-category">
            <p>{product.category}</p>
          </div>

          <div className="product-price">
            <p>€{product.price}</p>
          </div>

          <div className="product-description">
            <p>{product.description}</p>
          </div>

        </div>
      ))}
    </div>
  );
}

export default ProductListPage;