import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  async function fetchData() {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    console.log(data);
    setProducts(data);
  }
  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container ProductListPage">
      {products.map((product) => (
        <Link to={`/product/details/${product.id}`} key={product.id}>
          <div className="product" key={product.id}>
            <div
              className="img-box"
              style={{
                background: `url(${product.image}) no-repeat`,
                backgroundSize: "contain",
                backgroundPosition: "center",
              }}
            ></div>
            <h2 style={{ fontWeight: 700 }}>{product.title}</h2>
            <p>{product.category}</p>
            <p>{`$${product.price}`}</p>
            <p style={{ height: "100px", overflow: "hidden" }}>
              {product.description}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProductListPage;
