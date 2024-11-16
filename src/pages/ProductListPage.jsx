import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("ProductListPage error", error);
      });
  }, []);

  return (
    <div className="ProductListPage">
      {
        /* Render list of products here */
        products.map((product) => (
          <Link key={product.id} to={`/product/details/${product.id}`}>
            <div className="product-list">
              <img src={product.image} alt={product.title} />
              <h2 className="width">{product.title}</h2>
              <p>{product.category}</p>
              <p className="width">${product.price}</p>
              <p className="fifty-chars">{product.description}</p>
            </div>
          </Link>
        ))
      }
    </div>
  );
}

export default ProductListPage;
