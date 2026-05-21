import { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await Axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);


  return (
    <div className="ProductListPage">
    {products.length === 0 ? (
      <p>Loading products...</p>
    ) : (
      products.map((product) => (
        <Link key={product.id} to={`/product/details/${product.id}` }> 
        <div className="product-card">
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
          <p>${product.price.toFixed(2)}</p>
          <p>{product.category}</p>
          </div>
        </Link>
       ))
     )}
    
    </div>
  );
}

export default ProductListPage;
