import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:

  const getProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      console.log("Response:", response.data);
      setProducts(response.data);
    } catch (error) {
      console.log("no products recieved", error);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
  if (products.length === 0) {
    return <p>loading...</p>;
  }

  return (
    <>
      <h2>Products</h2>
      <div className="ProductListPage">
        {products &&
          products.map((product) => {
            return (
              <Link key={product.id} to={`/product/details/${product.id}`}>
                <div className="innerList">
                  <img
                    src={product.image}
                    alt={product.title}
                    style={{ width: "100px" }}
                  />
                  <h3>Title: {product.title}</h3>
                  <h3>Category: {product.category}</h3>
                  <h3>Price: ${product.price}</h3>
                  <h3>Description: {product.description}</h3>
                </div>
              </Link>
            );
          })}
      </div>
    </>
  );
}

export default ProductListPage;
