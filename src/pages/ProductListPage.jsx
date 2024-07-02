import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:

  const fetchAllProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (response.ok) {
        const parsed = await response.json();
        setProducts(parsed);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <div className="ProductListPage">
      {products.map((eachProduct) => {
        return (
          <Link to={`/product/details/${eachProduct.id}`}>
            <div className="card" key={eachProduct.id}>
              <img
                className="cardImage"
                src={eachProduct.image}
                alt={eachProduct.title}
              />
              <p>{eachProduct.title}</p>
              <p>{eachProduct.price}</p>
              <p>{eachProduct.description}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductListPage;
