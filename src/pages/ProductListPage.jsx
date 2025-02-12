import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductListPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (err) {
        setError("Failed to fetch products. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading products...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="ProductListPage">
      {products.map(({ id, image, title, category, price, description }) => (
        <Link key={id} to={`/product/details/${id}`}>
          <div className="card">
            <div className="content">
              <img src={image} alt={title} />
            </div>
            <div className="content">
              <p>
                <b>{title}</b>
              </p>
            </div>
            <div className="content">
              <p>{category}</p>
            </div>
            <div className="content">
              <p>${price.toFixed(2)}</p>
            </div>
            <div className="content">
              <p>{description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProductListPage;
