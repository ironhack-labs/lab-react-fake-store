import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ProductListPage.css";
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
        console.log("Error", error);
      });
  }, []);

  return (
    <div className="ProductListPage">
      {products.map((product) => {
        const firstSentence = product.description.split(".")[0] + ".";

        return (
          <div key={product.id}>
            <Link
              to={`/product/details/${product.id}`}
              className="products-list"
            >
              <img src={product.image} />
              <p>
                <strong>{product.title}</strong>
              </p>
              <p>{product.category}</p>
              <p>$ {product.price}</p>
              <p>{firstSentence}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default ProductListPage;