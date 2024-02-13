import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:

  useEffect(() => {

    axios.get("https://fakestoreapi.com/products").then((response) => {
      //console.log(response);
      setProducts(response.data);
    })

      .catch((error) => {
        console.log(error);
      })

  }, [])


  return (
    <div className="ProductListPage">
      {products && products.map((item) => {
        return (
            <Link to={`product/details/${item.id}`}>
          <div className="itemBox" key={item.id}>
            <span><img src={item.image} className="productImage"></img></span>
            <span>{item.title}</span>
            <span>{item.category}</span>
            <span>{item.price}€</span>
            <span className="itemDesc" >{item.description}</span>
          </div>
            </Link>
        )
      })}
    </div>
  );
}

export default ProductListPage;
