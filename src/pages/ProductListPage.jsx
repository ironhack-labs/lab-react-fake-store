import axios from "axios";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data)

      })
      .catch((error) => {
        console.log(error);
      })

  }, [])

  // To fetch the list of products, set up an effect with the `useEffect` hook:


  return (
    <div className="ProductListPage">
      {products && products.map((product) =>
        <article key={product.product_id}>
          <div className="product">
            <div>
              <img className="product-image" src={product.image} />
            </div>

            <div className="product-description">
              <h3 className="title">{product.title}</h3>
              <p className="category">{product.category}</p>
              <p className="description">{product.description}</p>
              <p className="price">{product.price}$</p>
            </div>
          </div>
        </article>
      )}
    </div>
  );
}

export default ProductListPage;
