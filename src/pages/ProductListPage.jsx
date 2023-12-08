import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const apiURL = "https://fakestoreapi.com/products";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  

  

  useEffect(() => {
    console.log("useEffect - Initial render (Mounting)");
    console.log(apiURL)
    axios
      .get(apiURL)
      .then((response) => {
        // console.log(response.data)
        setProducts(response.data);
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <Link key={product.id} to={`/product/details/${product.id}`}>
            <div className="card">
              <img src={product.image} alt="Products" />
              <h3>{product.title}</h3>
              <p>{product.category}</p>
              <p>{product.price}</p>
              <p>{product.description}</p>
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default ProductListPage;
