import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function ProductListPage() {
 
  const [products, setProducts] = useState([]);
 
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error", error);
      }
    }

    fetchProducts(); 
  }, []);


  return (
    <div>

      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="card">
            <Link to={`/product/details/${product.id}`}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <img src={product.image} alt={product.title} style={{ width: "100px" }} />
            <p><strong>Price:</strong> ${product.price}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}


export default ProductListPage;