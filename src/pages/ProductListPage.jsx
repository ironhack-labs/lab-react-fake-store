import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function ProductListPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error loading products:", error);
      });
  }, []);

  return (
    <div>
      {products.map((product) => (
        <Link key={product.id} to={`/product/details/${product.id}`}>
          <div>
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>${product.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProductListPage;
