import { useState, useEffect } from "react";
import axios from "axios";
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
        setProducts(response.data); // Para guardar los productos en el estado
      })
      .catch((error) => {
        console.error("Error al obtener los productos:", error);
      });
  }, []);

  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id} className="product-details">
            <Link to={`/product/details/${product.id}`} className="">
              <div className="product-details-card">
                <img src={product.image} alt={product.title} className="product-image" />
                <h2 className="product-title">{product.title}</h2>
                <p>Categoría: {product.category}</p>
                <p>${product.price}</p>
                <p>{product.description.slice(0, 100)}...</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductListPage;
