import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    async function getProducts() {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    }

    getProducts();
  }, []);

  return (
    <div className="ProductListPage">
      {products.map((product) => {
        return (
          <Link
            to={`/product/details/${product.id}`}
            style={{ display: "flex" }}
            key={product.id}
          >
            <img src={product.image} alt="Product" style={{ width: "200px" }} />
            <p>{product.category}</p>
            <p>{product.title}</p>
            <p>${product.price}</p>
            <p>{product.description}</p>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductListPage;
