import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    async function loadProducts() {
      try {
        const response = await fetch("https://fakestoreapi.com/products")
        const data = await response.json()
        setProducts(data)
      }
      catch (error) {
        console.log(error)
      }
    }
    loadProducts();
  }, []);

  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
      <div>
        <ul>
          {products.map((product) => (
            <NavLink to={`/product/details/${product.id}`}>
            <li key={product.id}>
              {product.title} {product.price}€
              <img src={product.image} alt={product.title} width="100" />
              </li>
            </NavLink>
          ))}
        </ul>
      </div>

    </div>
  );
}

export default ProductListPage;
