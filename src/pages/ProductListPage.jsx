import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductListPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log("Error fetching products:", error);
      });
  }, []);

  return (
    <div className="ProductListPage container">
      <h1 className="spacing-md">All Products</h1>
      {products.map((product) => {
        return (
          <div className="card spacing-md" key={product.id}>
            <Link to={`/product/details/${product.id}`}>
              <h2>{product.title}</h2>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default ProductListPage;