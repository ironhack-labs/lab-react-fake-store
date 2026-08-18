import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
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
        <Link
          to={`/product/details/${product.id}`}
          className="product-link"
          key={product.id}
        >
          <div className="product-row">
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
        </Link>
      ))}
    </div>
  );
}

export default ProductListPage;