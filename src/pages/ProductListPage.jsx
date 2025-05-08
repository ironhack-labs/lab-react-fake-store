import axios from "axios";
import { useEffect, useState } from "react";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
useEffect(()=> {
  axios.get("https://fakestoreapi.com/products")
  .then((response)=>{
    setProducts(response.data)
  })
  .catch((error) => {
    console.log("Error fetching the products", error)
  })
}, [])

  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
      <ul>
      {products.map(product=>(
        <li key={product.id}>
          <h2>{product.title}</h2>
          <p>${product.price}</p>
        </li>
      ))}
      </ul>
    </div>
  );
}

export default ProductListPage;
