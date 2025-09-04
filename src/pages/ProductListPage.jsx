import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductListPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div className="ProductListPage container">
      {products.map((product) => (
        <Link to={`/product/details/${product.id}`} key={product.id} style={{ textDecoration: 'none' }}>
          <div className="card">
            <img src={product.image} alt={product.title} />
            <h1>{product.title}</h1>
            <p className="price">${product.price}</p>
            <p>{product.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProductListPage;
