import { useState } from "react";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"; 

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
@@ -14,12 +17,82 @@ function ProductDetailsPage() {
  // To fetch the product details, set up an effect with the `useEffect` hook:


  const { id } = useParams(); 

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
      });
  }, []); 

  return (
    <div className="ProductDetailsPage">
    {/* Render product details here */}
      {/* Render product details here */}
      {product && (
        <div key={product.id}>
          <h1>{product.name}</h1>
          <img src={product.image} alt={product.name} />
          <p>{product.description}</p>
        </div>
      )}
    </div>
  );
}
 27 changes: 26 additions & 1 deletion27  
src/pages/ProductListPage.jsx
@@ -1,17 +1,42 @@
import { useState } from "react";
import { useState, useEffect } from "react";

import axios from "axios";

import { Link } from "react-router-dom";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products")
    .then((response)=>{
      console.log(response)
      setProducts(response.data);
    });
  }, []);


export default ProductDetailsPage;
  // To fetch the list of products, set up an effect with the `useEffect` hook:


  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
      {products && products.map((product)=>{
        return (
          <Link to={`/products/${product.id}`}>
          <article key={product.id}>
            <img src={product.image} />
            <h3>{product.title}</h3>
            <p>{product.category}</p>
            <p>{product.price}</p>
            <p>{product.description}</p>
          </article>
          </Link>
        )
      })}
    </div>
  );
}
Footer
© 2024 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
