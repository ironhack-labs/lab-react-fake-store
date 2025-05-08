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
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="ProductListPage">
      {products.map((product) => (
        <Link key={product.id} to={`/product/details/${product.id}`}>
          <div className="flex w-full h-12">
            <img
              className="w-14 h-14 object-cover"
              src={product.image}
              alt={product}
            />
            {product.title} - ${product.price}
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProductListPage;
