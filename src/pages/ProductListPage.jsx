import { useState, useEffect } from "react";
import axios from "axios";

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
      .then((response) => {
        setProducts(response);
        console.log(response)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (products === null) {
    return <h3>Buscando la información</h3>
  }

  products.map((eachProduct) => {
    return (
      <div className="ProductListPage">
        {/* Render list of products here */}
        <h2>{eachProduct.title}</h2>
        <p>{eachProduct.title}</p>
        <p>{eachProduct.category}</p>
        <p>{eachProduct.description}</p>
      </div>
    );
  }
  );
}

export default ProductListPage;
