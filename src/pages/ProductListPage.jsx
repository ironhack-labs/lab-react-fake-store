import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    // Make a GET request to the Fake Store API when the component mounts
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        // Convert the response to JSON format
        return response.json();
      })
      .then((data) => {
        // console.log("PRODUCT DATA:", data); // Check the data
        // Save the list of products in the state
        setProducts(data);
      })
      .catch((error) => {
        // Handle any errors from the request
        console.log(error);
      });
  }, []); // Empty dependency array means this effect runs only once, on mount

  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
      {products.map((product) => (
        <div key={product.id} className="card">
          <Link to={`/product/details/${product.id}`}>
          <img
            src={product.image}
            alt={product.title}
            style={{ height: 120 }}
          />
       <div className="product-line">
          <h3>{product.title}</h3>
          <p>{product.category}</p>
          <p>{product.price} €</p>
          <p>{product.description}</p>
          </div>
          </Link>
        </div>
        
      ))}
    </div>
  );
}

export default ProductListPage;
