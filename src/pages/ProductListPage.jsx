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
    .then((response) => {
      setProducts(response.data);
      // console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
  }, []);

  return (
    <div className="ProductListPage">
      {products.map((product) =>
      <Link key={product.id} to={`/product/details/${product.id}`}>
        <div className="product-list-entry">
          <img src={product.image} alt="Product Image" />
          <p>{product.title}</p>
          <p>{product.category}</p>
          <p>${product.price}</p>
          <p>{product.description.slice(0, 100)}...</p>
        </div>
      </Link>
      )}
    </div>
  );
}

export default ProductListPage;
