import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="d-flex flex-wrap justify-content-center gap-3">
  {products.map((product) => (
    <Link key={product.id} to={`/product/details/${product.id}`}>
    <div  className="card" style={{ width: "18rem" }}>
      <img src={product.image} className="card-img-top" alt={product.title} />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text">
          <small className="text-body-secondary">
            Rating: {product.rating.rate} | Count: {product.rating.count}
          </small>
        </p>
      </div>
    </div>
    </Link>
  ))}
</div>

  );
}

export default ProductListPage;
