import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';

const API_URL = "https://fakestoreapi.com/products";

function ProductListPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios
      .get(API_URL)
      .then(response => setProducts(response.data))
      .catch(err => console.log(err));
  };

  return (
    <div>
      {products.map(elm => (
        <div className="product-card" key={elm.id}>
          <img src={elm.image} alt={elm.title} className="product-image" />
          <div className="product-info">
            <Link to={`/products/${elm.id}`} className="product-title">
              <h3>{elm.title}</h3>
            </Link>
            <p className="product-category">{elm.category}</p>
            <p className="product-price">${elm.price}</p>
            <p className="product-description">{elm.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductListPage;
