import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);


  return (
    <div className="ProductListPage">
      {products.length === 0 ? (
        <h2>Loading...</h2>
      ) : (
        <h2>Number of products in our API: {products.length}</h2>
      )}

      {products && products.map((productDetails, index) => {
        return (
          <div key={index} className="card">
            <h3>{productDetails.title}</h3>
            <img src={productDetails.image}/>
            <p>About the product: {productDetails.description}</p>
            <p>Price: ${productDetails.price}</p>

            <Link to={`/products/details/${productDetails.id}`}>More Details</Link>

          </div>
        );
      })}
    </div>
  );
}

export default ProductListPage;