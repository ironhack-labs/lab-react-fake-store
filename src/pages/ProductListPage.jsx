import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook: fetch('https://fakestoreapi.com/products')
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        // console.log(response.data);
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
      {products.map((eachProduct, index) => {
        return (
          <Link to={`/product/details/${eachProduct.id}`} key={index}>
            <div id="each-product-card">
              <div className="img-container">
                <img src={eachProduct.image} />
              </div>
              <h1>{eachProduct.title}</h1>
              <span>{eachProduct.category}</span>
              <p>$ {eachProduct.price}</p>
              <p id="description-product-card">{eachProduct.description}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductListPage;
