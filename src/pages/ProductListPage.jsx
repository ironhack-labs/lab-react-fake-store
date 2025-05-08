import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const apiURL = "https://fakestoreapi.com/products";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);
  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios.get(apiURL).then((response) => {
      setProducts(response.data);
      //   fetch("https://fakestoreapi.com/products")
      //     .then((res) => res.json())
      //     .then((json) => setProducts(json));
    }, []);
  });

  return (
    <div className="ProductListPage">
      {products.map((product) => {
        return (
          <div key={product.id}>
            <Link to={`/product/details/${product.id}`}>
              <div className="ProductCard">
                <img style={{ width: "10%" }} src={product.image} />
                <h3>{product.title}</h3>
                <p>{product.category}</p>
                <p>{product.price}€</p>
                <p>{product.description.substring(0, 50)}...</p>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default ProductListPage;
