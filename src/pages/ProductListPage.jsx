import { useEffect, useState } from "react";
import axios from "axios";
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
    })
    .catch((error) => {
      console.log("error", error)
    })
  }, [])

  return (
    <div className="ProductListPage">
      {products && products.map((product, i) => {
        console.log(product)
        return (
          <Link to={`/product/details/${product.id}`} key={product.id}>
            <div className="card">
              <img src={product.image} height={170} width={170} alt="product image" />
              <p>{product.title}</p>
              <p>{product.category}</p>
              <p>{product.price}</p>
              <p>{product.description.slice(0, 70) + "..."}</p>
            </div>
          </Link>
        )
      })}
    </div>
  );
}

export default ProductListPage;
