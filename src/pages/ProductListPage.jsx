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
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div className="ProductListPage">
      <ul>
        {products.map((product) => (
          <li key={product.id} className="card">
          <Link to={`/product/details/${product.id}`}>
            <img src={product.image}></img>
            <p>{product.title}</p>
            <p>${product.price}</p>
            <p>{product.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductListPage;
