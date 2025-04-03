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
      <div className="products">
        {products.length > 0 ? (
          products.map((product) => (
            <Link key={product.id} to={`/product/details/${product.id}`}>
              <div className="product">
                <div className="product-img">
                  <img src={product.image} alt={product.title} />
                </div>
                <div className="product-title">{product.title}</div>
                <div className="product-category">{product.category}</div>
                <div className="product-price">${product.price}</div>
                <div className="product-description">{product.description}</div>
              </div>
            </Link>
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>
    </div>
  );
}

export default ProductListPage;
