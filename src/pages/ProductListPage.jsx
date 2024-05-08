import { useState, useEffect } from "react";
import axios from "axios";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  let dataLoaded = false;

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
    .then((response) => {
      setProducts(response.data)
      dataLoaded = true;
      console.log("data was loaded")
    })
    .catch((error) => {
      console.log(error)
    })
  }, [])


  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
      {dataLoaded === true && products[0].title}

    </div>
  );
}

export default ProductListPage;
