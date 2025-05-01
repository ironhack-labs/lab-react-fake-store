import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const API_URL = "https://fakestoreapi.com/products";


function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    console.log("Fetching products...");
    const fetchProducts = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Fetch products error:", error);
      }
    }
    fetchProducts();
  }, []);

  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
      {products && products.map((product) => {
        return (
          <Link key={product.id} to={`/product/details/${product.id}`}>
            <div className='homepage-list'>
              <img src={product.image} alt={product.title} />
              <div className='card-content'>
                <strong className='card-title'>{product.title}</strong>
                <p>{product.category}</p>
                <p>${product.price}</p>
                <div className='card-description'>
                  <p>{product.description}</p>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductListPage;
