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
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="ProductListPage">
      {products.map((product) => (
        <Link
          key={product.id}
          to={`/product/details/${product.id}`}
          className="product-id"
        >
          <div className="card">
            <img src={product.image} className="product-image"></img>
            <h2 className="product-title"> {product.title} </h2>
            <h2 className="product-price"> ${product.price} </h2>
            <h2 className="product-description"> {product.description} </h2>
            <h2 className="product-category"> {product.category} </h2>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProductListPage;
