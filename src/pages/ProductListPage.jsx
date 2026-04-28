import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
      {products.map((product) => {
        <div key={product.id} className="card">
          <Link to={`/product/details/${product.id}`}>
            <img src={product.image} alt={product.title} height="120px" />
            <div className="product-line">
              <h3>{product.title}</h3>
              <p>{product.title}</p>
              <p>{product.category}</p>
              <p>{product.price}</p>
              <p>{product.description}</p>
            </div>
          </Link>
        </div>;
      })}
    </div>
  );
}

export default ProductListPage;
