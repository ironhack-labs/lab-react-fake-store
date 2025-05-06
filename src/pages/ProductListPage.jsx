import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    //this is a side effect, something that happens in the background outside the component
    fetch("https://fakestoreapi.com/products") //the fetch function makes a request to the API and brings the data from the URL
      .then((response) => response.json()) //the response from the request to the API is converted to JSON
      .then((data) => setProducts(data)) //and then the JSON data is saved in the `products` state variable through the `setProducts` function
      .catch((error) => console.log("Error fetching products:", error));
  }, []);

  return (
    <div className="ProductListPage">
      {products.map((product) => {
        return (
          <Link to={`/product/details/${product.id}`} key={product.id}> {/* if I want that anywhere you click on the product card 
          transfer me to the details page I have wrap the whole product card in a link */}
            <div className="product-card">
              <img src={product.image} alt={product.title} />
              <h2>{product.title}</h2>
              <p>{product.category}</p>
              <p>${product.price}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductListPage;
