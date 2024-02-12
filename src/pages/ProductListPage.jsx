import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  const baseUrl = "https://fakestoreapi.com";

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios
      .get(`${baseUrl}/products`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((e) => {
        console.log("Error");
      });
  }, []);

  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
      <ul>
        {products.map((productDetails, index) => (
          <li key={index} className="ListBox">
            <Link to={`./product/details/${productDetails.id}`}>
              <img src={productDetails.image} />
              <div>
                <p>{productDetails.title} </p>
                <p>{productDetails.price} </p>
                <p>{productDetails.category} </p>
                <p>{productDetails.description} </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductListPage;
