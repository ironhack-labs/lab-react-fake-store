import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="ProductListPage">
      <div className="container">
        <div className="row">
          {/* Render list of products here */}
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/product/details/${product.id}`}
              className="col-md-4"
            >
              <img src={product.image} alt="" />
              <h2>
                <strong>{product.title}</strong>
              </h2>
              <p>{product.category}</p>
              <p>{`${product.price}$`}</p>
              <p>{product.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductListPage;
