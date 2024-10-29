import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setProducts(response.data).catch((e) => {
        console.log(e);
      });
    });
  }, []);

  return (
    <>
      <div className="ProductListPage">
          {products.map((productObj) => {
            return (
              <div key={productObj.id} className="container">
        <Link to={`/product/details/${productObj.id}`}>
                <img src={productObj.image} />
                <p>Title: {productObj.title}</p>
                <p>Category: {productObj.category}</p>
                <p>Price: {productObj.price}</p>
                <p>Description: {productObj.description}</p>
        </Link>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default ProductListPage;
