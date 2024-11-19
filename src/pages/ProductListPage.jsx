import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {}
    };
    fetchData();
  });

  return (
    <div className="ProductListPage">
      {products.map((product) => {
        return (
          <Link
            className="card"
            key={product.id}
            to={`/product/details/${product.id}`}
          >
            <div className="image-container">
              <img className="image" src={product.image} alt={product.title} />
            </div>

            <h3>{product.title}</h3>
            <p>{product.category}</p>
            <p>{product.price}</p>
            <p className="card-description">{product.description}</p>
          </Link>
        );
      })}
    </div>
  );
}

// useEffect(() => {
//   fetch("https://fakestoreapi.com/products")
//     .then((response) => {
//       return response.json();
//     })
//     .then(() => {})
//     .catch((error) => {});
// });

export default ProductListPage;
