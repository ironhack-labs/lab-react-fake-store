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
        <div className="product-card" key={product.id}>
          <img src={product.image} alt={product.title} />

          <div className="product-info">
            <h2>{product.title}</h2>
            <p>€{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductListPage;