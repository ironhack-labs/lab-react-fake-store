import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductListPage() {
  const BASE_URL = "https://fakestoreapi.com";

  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).

  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log(products)
    axios
      .get(BASE_URL + "/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((e) => {
        console.log("error", e);
      });
  }, []);

  // To fetch the list of products, set up an effect with the `useEffect` hook:

  return (
    <div key={products.id} className="ProductListPage">{/* Render list of products here */}
    {products.map((productObj) => {
      return (
        <div key={products.id} className="product-card"> 

      <h2 style={{color: "red"}}><b>{productObj.title}</b></h2>
    
      <h4><b>Price: </b>{productObj.price}</h4>
      <p><b>Rating: </b>{productObj.rating.rate}</p>
       <img src={productObj.image} alt={productObj.title} style={{ width: "100px" }} />
      
      <Link to={`/product/details/${productObj.id}`}>
      <button style={{border: "1px solid black", borderRadius:"10px"}}>Article Detail</button>
      </Link>
      
      </div>

      )
      
    })}
      
    </div>
  );
}

export default ProductListPage;
