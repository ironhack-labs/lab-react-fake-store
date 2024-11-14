import { useEffect, useState } from "react";
import ProductItem from "../components/ProductItem";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  console.log(products);

  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
      {products.map((p) => (
        <Link key={p.id} to={`/product/details/${p.id}`}>
          <ProductItem product={p}></ProductItem>
        </Link>
      ))}
    </div>
  );
}

export default ProductListPage;
