import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function ProductListPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    getProducts();
  }, []);

  return (
    <div className="ProductListPage">
      {products &&
        products.map((oneProduct) => {
          return (
            <Link key={oneProduct.id} to={`/product/details/${oneProduct.id}`}>
              {/* Wrap each product card with <Link> component */}
              <div className="card">
                <img src={oneProduct.image} alt={oneProduct.title} style={{ height: "100px" }} />
                <p>{oneProduct.title}</p>
                <p>{oneProduct.description}</p>
                <p>{oneProduct.price}</p>
              </div>
            </Link>
          );
        })}
    </div>
  );
}

export default ProductListPage;