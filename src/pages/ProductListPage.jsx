import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);
  console.log(products);

  // To fetch the list of products, set up an effect with the `useEffect` hook:

  useEffect(() => {
    axios

      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((e) => {
        console.log("error getting products from the API", e);
      });
  }, []);

  return (
    <div className="ProductListPage">
      {products.map((product) => {
        return (
          <Link to={`/product/details/${product.id}`} key={product.id}>
            <div className="ProductDetail">
              <img src={product.image} />
              <p>{product.title}</p>
              <p>{product.category}</p>
              <p>${product.price}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductListPage;
