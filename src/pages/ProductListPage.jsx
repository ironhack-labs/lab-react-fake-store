import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const apiURL = "https://fakestoreapi.com/products"

function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios
      .get(apiURL)
      .then(res => setProducts(res.data))
      .catch(err => console.log(err))
  }, [])


  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
      {products.map(product => (
        <Link key={product.id} to={`/product/details/${product.id}`}>
          <div className="ProductList">
            <img src={product.image} alt={product.name} />
            <p>{product.title}</p>
            <p>{product.category}</p>
            <p>${product.price}</p>
            <p>{product.description}</p>
          </div>
        </Link>

      ))}
    </div>
  );
}

export default ProductListPage;
