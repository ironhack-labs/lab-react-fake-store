import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  async function getProducts() {
    try {
      const response = await fetch("https://fakestoreapi.com/products");

      const jsonResponse = await response.json();
      setProducts(jsonResponse);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="ProductListPage">
      {/* Render list of products here */}

      <ul className="cards-container">
        {products.map((eachProduct) => {
          return (
         
              <li className="card" key={eachProduct.id}>   <Link to={`/products/details/${products.id}`}>
                <img src={eachProduct.image} alt={eachProduct.title} />
                <h3>{eachProduct.title}</h3>
                <p>{eachProduct.category}</p>
                <p>{eachProduct.price}</p>
                <p>{eachProduct.description}</p>
                 </Link>
              </li>
           
          );
        })}
      </ul>
    </div>
  );
}

export default ProductListPage;
