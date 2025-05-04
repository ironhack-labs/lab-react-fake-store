import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

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
      .catch((e) => console.log("Error", e));
  }, []);

  return (
    <div className="ProductListPage">
      {products.map((productObj) => {
        return (
          <NavLink key={productObj.id} to={`/product/details/${productObj.id}`}>
            <div className="card">
              <div className="image-container">
                <img
                  src={productObj.image}
                  alt={productObj.title}
                  style={{ width: 200 }}
                />
              </div>
              <div className="details-container">
                <h2>
                  <strong>{productObj.title}</strong>
                </h2>
                <p className="category">{productObj.category}</p>
                <p className="price">${productObj.price.toFixed(2)}</p>
                <p className="description">{productObj.description}</p>
              </div>
            </div>
          </NavLink>
        );
      })}
    </div>
  );
}

export default ProductListPage;
