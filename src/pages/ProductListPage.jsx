import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link, } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        const allProducts = response.data;
        setProducts(allProducts);
      })
      .catch((e) => {
        console.log("Error fetching data from API..", e);
      });
  }, []);

  return (
    <>
      {products.map((productobj) => {
        return (
          <Link to={`/product/details/${productobj.id}`}>
          <div className="ProductListPage card" key={productobj.id}>
            {/* Render product details here */}
            <img src={productobj.image} alt={productobj.title} />
            <p>{productobj.title}</p>
            <p>{productobj.category}</p>
            <p>{productobj.price}</p>
            <p>{productobj.description}</p>
          </div>
          </Link>
     
        );
      })}
    </>
  );
}

export default ProductListPage;
