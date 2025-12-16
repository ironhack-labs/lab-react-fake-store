import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setProducts(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="ProductListPage">
      {products &&
        products.map((product) => {
          return (
            <Link to={`product/details/${product.id}`} key={product.id}>
              <div className="product-card">
                <img src={product.image} />
                <h3>{product.title}</h3>
                <p>{product.category}</p>
                <p>$ {product.price}</p>
                <p>{product.description}</p>
              </div>
            </Link>
          );
        })}
    </div>
  );
}

export default ProductListPage;
