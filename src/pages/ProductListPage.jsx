import { useEffect, useState } from "react";
import axios from "axios";
import "./ProductListPage.css"
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return  (
    <div className="ProductListPage">
      <h1>Products</h1>

      <div className="products-grid">
        {products.map((product) => {
          return (
            <Link to={`/product/details/${product.id}`} key={product.id}>
            <div className="product-card" >
              <div className="product-image">
                <img src={product.image} alt={product.title} />
              </div>

              <div className="product-info">
                <p className="product-category">{product.category}</p>

                <h2>{product.title}</h2>

                <p className="product-price">
                  €{product.price}
                </p>
              </div>
            </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default ProductListPage;
