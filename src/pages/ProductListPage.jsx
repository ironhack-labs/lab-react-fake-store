import { useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        console.log(response);
        setProducts(response.data);
      })
      .catch(() => {
        console.log(error);
      });
  }, []);

  return (
    <div className="ProductListPage">
      {products.map((product)=>{
        return (
          <Link style={{display:"flex", flexDirection: "row"}} key={product.id}
          to={`/product/details/${product.id}`}>
            <img width="180px" height="300px" src={product.image} />
            <h2>{product.title}</h2>
            <h2>{product.category}</h2>
            <h2>{product.price}€</h2>
            <p>{product.description}</p>
          </Link>
        )
      })}
    </div>
  );
}

export default ProductListPage;
