// Import useEffect
import { useState, useEffect } from "react";

// Import axios
import axios from "axios";

// Import link
import { Link } from "react-router-dom";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
useEffect(() => {

  axios.get("https://fakestoreapi.com/products")
  .then((response) => {
    // Handle success
    setProducts(response.data);
    //console.log(response);
  })
  .catch((error) => {
    // Handle error
    console.log(error);
  })
}, [] );
//  ^ [] Means the effect will run only once, when the component mounts


  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
      {products && products.map((products) => {
        return (
          <article key= {products.id} className="product-card">
            <Link to={`/product/details/${products.id}`}>             
            <img src={products.image} alt={products.title} style={{width: 200, height: 200}}/>
            <h3>{products.title}</h3> {/* import the product properties to be rendered ({products}) */}
            </Link>
            <p>{products.price}</p>
            <p>{products.description}</p>
            <p>{products.category}</p>
          </article>
        )
      })}
    </div>
  );
}

export default ProductListPage;
