import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
 useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data); // Save the product list to state
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

    if (!products.length) {
    return <p>Loading...</p>;
  }

  return (
    <div className="ProductListPage">
   {products.map((product) => (
        <div key={product.id}>
          <Link to={`/product/details/${product.id}`}>
            <h3>{product.title}</h3>
            <img src={product.image} alt={product.title} width="100" />
            <p>${product.price}</p>
          </Link>
    </div>
  );
}

export default ProductListPage;
