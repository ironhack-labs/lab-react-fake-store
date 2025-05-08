import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then((response) => {
        console.log(response);
        setProducts(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="ProductListPage">
      <h1>Products</h1>
      <div className="products">

        {products.map((product) => (
          <div className="card" key={product.id}>
            <Link to={`/product/details/${product.id}`}>
              <img width="150px" src={product.image} alt={product.title} />
              <div className="card-content">
              <h2>{product.title}</h2>
              <p>{product.price}</p>
              <p>{product.category}</p>
              <p>{product.description}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ProductListPage;
