import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  const getProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="ProductListPage">
      
        {products ? (
          products.map((product) => (
            <div className="flex items-center" key={product.id}>
                <Link to={`/product/details/${product.id}`}>
                <img className="product-img" src={product.image} />
                <h1>{product.title}</h1>
                <p>{product.category}</p>
                <p>${product.price}</p>
                <p>{product.description}</p>
              </Link>
            </div>
            
          ))
        ) : (
          <p>Loading products...</p>
        )}
      
    </div>
  );
}

export default ProductListPage;
