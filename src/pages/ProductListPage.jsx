import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  async function getData() {
    const productsArray = await fetch("https://fakestoreapi.com/products");
    const productsArrayJson = await productsArray.json();

    setProducts(productsArrayJson);
  }
  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="ProductListPage">
      {products.map((product) => {
        return (
          <Link key={product.id} to={`/product/details/${product.id}`}>
            <div className="card" key={product.id} product={product}>
              <img src={product.image} alt={`image of ${product.title}`} />
              <h2>{product.title}</h2>
              <p>{product.category}</p>
              <p>{product.price}</p>
              <p>{product.description}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductListPage;
