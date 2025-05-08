import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function ProductListPage() {
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);


  return (
    <div className="ProductListPage">
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/product/details/${product.id}`}>
              <h2>{product.title}</h2>
              <img src={product.image} alt={product.title} width={100} />
              <p>${product.price}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductListPage;
