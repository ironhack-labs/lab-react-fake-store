import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./ProductListPage.css";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);
  const URL = "https://fakestoreapi.com/products";

  // const params = useParams();

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  async function fetchList() {
    try {
      const response = await axios.get(`${URL}`);
      console.log(response.data);
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchList();
  }, []);

  if (!products) {
    return <p>No products</p>;
  }

  return products.map((product) => {
    return (
      <Link to={`/product/details/${product.id}`} key={product.id}>
        <div className="product">
          <img className="image" src={product.image} alt="product image" />
          <p>
            <strong>{product.title}</strong>
          </p>
          <p>{product.category}</p>
          <p>{product.price}€</p>
          <p>{product.description}</p>
        </div>
      </Link>
    );
  });
}

export default ProductListPage;
