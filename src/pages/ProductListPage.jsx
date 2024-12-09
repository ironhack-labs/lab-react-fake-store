import axios from "axios";
import { useEffect, useState } from "react";
import ProductDetailsPage from "./ProductDetailsPage";
import ProductItem from "../components/Product-Item";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
    .then((response) => setProducts(response.data))
    .catch((error) => console.log(error))
  }, [] );


  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />      
      ))}   
    </div>
  );
}

export default ProductListPage;
