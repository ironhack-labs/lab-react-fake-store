import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./ProductListPage.css";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    // setIsLoading(true);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/products`,
      );
      setProducts(response.data);
      // setIsLoading(false)
    } catch (error) {
      console.log(error);
    }
  };

  // if (isLoading && <h1>Loading...</h1>)

  return (
    <div className="ProductListPage">
      {products.map((product) => {
        return (
          <Link to={`/product/details/${product.id}`}>
            <div key={product.id} className="products-container">
              <div className="image-container">
                <img src={product.image} alt="Product image" />
              </div>
              <h2 className="item">
                <strong>{product.title}</strong>
              </h2>
              <span className="item">{product.category}</span>
              <span className="item">${product.price}</span>
              <p className="item">{product.description}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductListPage;
