import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);
  
  const fetchProducts = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const parsedResponse = await response.json();
      setProducts(parsedResponse);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);


  // To fetch the list of products, set up an effect with the `useEffect` hook:


  return (
    <div className="ProductListPage">
      <ul> 
        {products.map((product) => (
          <Link to={`/product/details/${product.id}`}> 
          <li key={product.id} className="card">
            <img src={product.image} alt={product.title} /> 
            <h3>{product.title}</h3> <p className="content">{product.category}</p> <p className="content">{product.price}</p> <p className="content">{product.description}</p></li>
          </Link>
          
        ))} 
      </ul>
      {/* Render list of products here */}
    </div>
  );
}

export default ProductListPage;
