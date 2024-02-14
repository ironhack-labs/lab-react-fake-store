import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import axios from "axios";
function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
        // Handle success
        console.log(response);
      })
      .catch((error) => {
        // Handle error
        console.log(error);
      })
  }, []);

  return (
    <div className="ProductListPage">
      {products && products.map((product) => {
        return (
          <div className="card" key={product.id}>
            <Link to={`/product/details/${product.id}`}>
              <img className="card-img" src={product.image} alt={product.title} />
            </Link>
            <h3>{product.title}</h3>
            <p>{product.category}</p>
            <p>{product.price}</p>
            <p>{product.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default ProductListPage;
