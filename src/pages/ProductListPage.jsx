import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
useEffect(() => {
  fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((data) => {      
    setProducts(data);
  });
  
}, [])
  
  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
      {products.map((product) => {
        return <Link to={`/product/details/${product.id}`} key={product.id} >
        <div className="card">
          <img src={product.image} alt="" className="content"/>
          <h2 className="content">{product.title}</h2>
          <p className="content">{product.category}</p>
          <p className="content">Price: {product.price}</p>
          <p className="content">{product.description}</p>
        </div>;
        </Link>
      })}
    </div>
  );
}

export default ProductListPage;
