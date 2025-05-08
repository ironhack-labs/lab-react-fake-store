import { useState, useEffect } from "react";
import axios from "axios";
import ProductDetailsPage from "./ProductDetailsPage";
import { Link } from "react-router-dom";

const apiURL = "https://fakestoreapi.com/products";

function ProductListPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(apiURL).then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <div className="ProductListPage">
      {products.map((prod) => {
        return (
          <Link to={`./product/details/${prod.id}`}>
            <div key={prod.id} className="card">
              <img src={prod.image} alt="product image" className="img" />
              <h2>{prod.title}</h2>
              <h4>{prod.category}</h4>
              <p>$ {prod.price}</p>
              <p>{prod.description}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductListPage;
