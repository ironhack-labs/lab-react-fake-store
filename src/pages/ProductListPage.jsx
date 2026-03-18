import { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
    .then((result) => {
      setProducts(result.data);
    })
    .catch((error) => {
      console.log(error);
    })
  }, [])

  console.log(products);

  if (products.length === 0) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <div className="ProductListPage">
      {
        products.map((product) => {
          return (
            <Link to={`/product/details/${product.id}`}>
              <div className="product-card" key={product.id}>
                <img src={product.image} alt={product.title + " image"} />
                <h3><strong>{product.title}</strong></h3>
                <p>{product.category}</p>
                <p><strong>{product.price}</strong></p>
                <p>{product.description.slice(0, 50)}</p>
              </div>
            </Link>
          )
        })
      }
    </div>
  );
}

export default ProductListPage;
