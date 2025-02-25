import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then(res => setProducts(res.data))
  }, [])

  return (
    <div className="ProductListPage">
      {products.map(product => {
        return <Link to={`/product/details/${product.id}`}>
          <div className="card">
            <p>{product.id}</p>
            <p>{product.title}</p>
            <p>{product.price}</p>
          </div>
        </Link>
      })}
    </div>
  );
}

export default ProductListPage;