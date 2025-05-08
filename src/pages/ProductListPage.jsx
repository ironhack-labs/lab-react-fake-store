import { useState, useEffect } from "react";
import { ProductCard } from "../components/ProductCard";
import './ProductListPage.css'

function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((jsonResponse) => {
        console.log(jsonResponse);
        setProducts(jsonResponse);
  })
  .catch(() =>
    console.error("Sorry, the fetch for the products failed!")
  );
}, []);


  return (
    <div className="ProductListPage">
      {/* Render list of products here */
      products.length === 0 ? (
        <h2> Loading...</h2>
      ) : (
        products.map((eachProduct, index) => {
          return <ProductCard eachProduct={eachProduct} key={index} />;
        })
      )
      }
    </div>
  );
}

export default ProductListPage;
