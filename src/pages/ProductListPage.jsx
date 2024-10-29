import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState(null);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data)
      })
      .catch(e => {
        console.log(e)
      })
  })

  return (
    <div className="container">
      {products && products.map((productDetails, index) => {
        return (
          <div key={index}>
            <Link to={`/product/details/${productDetails.id}`}>
              <img  src={productDetails.image} />
              <h1>{productDetails.title}</h1>
              <h3>{productDetails.price}</h3>
              <h3>{productDetails.description}</h3>
            </Link>

          </div>
        )
      })}
    </div>
  );
}

export default ProductListPage;
