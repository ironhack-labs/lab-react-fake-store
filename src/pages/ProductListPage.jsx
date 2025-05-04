import { useEffect, useState } from "react";
import "./ProductDetailsPage.css"
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  async function fetchProducts() {

    try{
      const response = await fetch("https://fakestoreapi.com/products");

      if(!response.ok){
        throw new Error("Something went wrong :( Please try reloading the page.")
      }
      const responseJson = await response.json();
      setProducts(responseJson);
      
    }catch (err){
      console.log(err); 
    } 
  }
  
  useEffect(() => {
    fetchProducts();
  },[]); 
  

  return (
    <div className="ProductListPage">
      <ul>
        {products.map((product, index) => {
          return (
            <Link to={`/product/details/${product.id}`} key={index}>
              <li>
                <img src={product.image} alt="" />
                <h2>{product.title}</h2>
                <p>{product.category}</p>
                <p>{product.price}</p>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default ProductListPage;
