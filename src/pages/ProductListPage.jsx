import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (response.ok) {
        const jsonData = await response.json();
        setProducts(jsonData);
        console.log("Json data is fetched", jsonData);
      } else {
        throw new Error("Failed to fetch data response isn't ok");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="ProductListPage">
      <ul>
        {products.map((product) => {
          return (
            <Link to={`/product/details/${product.id}`} key={product.id}>
              <li>
                <img src={product.image} alt="Product image" />
                <p>{product.title}</p>
                <p>{product.category}</p>
                <p>{product.price}</p>
                <p>{product.description}</p>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default ProductListPage;
