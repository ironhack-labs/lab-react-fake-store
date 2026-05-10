import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (products.length === 0) {
    return <h3>Loading...</h3>;
  }

  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
      {products.map((product, i) => {
        return (
          <Link
            to={`/product/details/${product.id}`}
            className="card"
            key={product.id}
          >
            <img src={product.image} alt={product.title} height={"20px"} />
            <h3>{product.title}</h3>
            <p>{product.category}</p>
            <h5>{product.price}€</h5>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductListPage;
