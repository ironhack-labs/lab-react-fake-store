import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      })

  }, [] );


  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
      {products && products.map((product) => (
        <div key={product.id} style={{ display: 'flex', border: "2px solid black", }} >
          <Link to={`/product/details/${product.id}`}>
          <img src={product.image} height={100} width={200} />
          
          <p style={{border: "2px solid black",}}>{product.title}</p>
          <p style={{border: "2px solid black",}}>{product.category}</p>
          <p style={{border: "2px solid black",}}>{product.price}€</p>
          <p style={{border: "2px solid black",}}>{product.description}</p>
          </Link>

        </div>
      ))}
    </div>
  );
}

export default ProductListPage;
