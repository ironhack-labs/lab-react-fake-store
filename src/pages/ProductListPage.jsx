import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/ProductListPage.css";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  const baseUrl = "https://fakestoreapi.com/products";

  useEffect(() => {
    axios
      .get(baseUrl)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="ProductListPage">
      {products.map((productObj) => {
        console.log("ID:", productObj.id);
        return (
          <Link to={`./product/details/${productObj.id}`} key={productObj.id}>
            <div className="ProductListPage__product" >
              <img src={productObj.image} alt="" />
              <div className="title">{productObj.title}</div>
              <div className="category">{productObj.category}</div>
              <div className="price">${productObj.price}</div>
              <div className="description">
                {productObj.description.slice(0, 30)}
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductListPage;
