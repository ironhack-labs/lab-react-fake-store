import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // and we use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setProducts(data)
      })
      .catch((error) => {
        console.log("Error fetching products:", error)
      })
  }, []);

  return (
    <div className="ProductListPage">
      <h2>Product List</h2>

      {/* Render list of products here with clickable links */}
      {products.map((product) => {
        return (
          <Link key={product.id} to={`/product/details/${product.id}`}>
            <div className="card flex-center spacing-md">
              <img 
                src={product.image} 
                alt={product.title} 
                style={{ height: "100px", objectFit: "contain" }} 
              />
              <div>
                <h3>{product.title}</h3>
                <p>Category: {product.category}</p>
                <p>Price: ${product.price}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductListPage;
