import { useEffect, useState } from "react";
import axios from "axios";
import "./ProductListPage.css";
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
        // console.log(response);
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
      {products.map((eachProduct) => (
        <Link key={eachProduct.id} to={`/product/details/${eachProduct.id}`}>
          <div key={eachProduct.id} className="product-card">
            <img src={eachProduct.image} alt={eachProduct.title} />
            <div className="product-info">
              <h3>{eachProduct.title}</h3>
              <p className="category">{eachProduct.category}</p>
              <p className="price">${eachProduct.price}</p>
              <p className="description">{eachProduct.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProductListPage;
