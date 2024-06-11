import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
      {products.map((product) => (
        <Link to={`/product/details/${product.id}`} key={product.id}>
          <div>
            <img
              src={product.image}
              alt={product.title}
              style={{ height: "200px" }}
            />
            <p>{product.title}</p>
            <p>{product.category}</p>
            <p>${product.price}</p>
            <p>{product.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProductListPage;
