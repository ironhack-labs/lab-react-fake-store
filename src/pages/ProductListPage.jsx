import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const apiURLProducts = "https://fakestoreapi.com/products";
function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(apiURLProducts).then((response) => {
      setProducts(response.data);
    });
  }, []);

  // To fetch the list of products, set up an effect with the `useEffect` hook:

  return (
    <div className="ProductListPage">
      {products.map((product) => {
        return (
          <Link to={`/product/details/${product.id}`}>
            <div key={product.id} className="product-listing">
              <img src={product.image} alt={product.title} />
              <div className="products-text">
                <h4>{product.title}</h4>
                <p>{product.category}</p>
                <p>{`$${product.price}`}</p>
                <p>{product.description}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductListPage;
