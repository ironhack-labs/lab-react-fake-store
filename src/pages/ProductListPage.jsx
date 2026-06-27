import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API_URL = "https://fakestoreapi.com";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  const getAllProducts = () => {
    axios
      .get(`${API_URL}/products`)
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  // To fetch the list of products, set up an effect with the `useEffect` hook:

  return (
    <div className="ProductListPage container">
      {products.map((product) => (
        <Link to={`/product/details/${product.id}`} key={product.id}>
          <div
            className="grid grid-cols-[150px_2fr_1fr_100px_2fr]
                   items-center gap-8 bg-white p-5 mb-3
                   rounded-lg shadow"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-36 h-36 object-contain border rounded"
            />

            <h3 className="font-bold">{product.title}</h3>

            <p>{product.category}</p>

            <p className="font-semibold">${product.price}</p>

            <p className="line-clamp-2">{product.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProductListPage;
