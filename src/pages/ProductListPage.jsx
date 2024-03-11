import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:

  useEffect(() => {
    async function getAllProducts() {
      axios
        .get("https://fakestoreapi.com/products")
        .then((response) => {
          console.log(response.data);
          setProducts(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    getAllProducts();
  }, []);

  return (
    <div className="ProductListPage">
      {products.map((product) => (
        <Link key={product.id} to={`product/details/${product.id}`}>
          <div className="card-row">
            <img src={product.image} alt={product.title}></img>
            <h3>title:{product.title}</h3>
            <h3>description:{product.description}</h3>
            <h3>price:{product.price}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProductListPage;
