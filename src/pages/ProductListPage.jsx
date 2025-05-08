import { useEffect, useState } from "react";
import "../pages/ProductListPage.css"
import { Link } from "react-router-dom";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect (() => {
    const fetchProduct = async () =>{
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products"
        );
        const parsed = await response.json();
        console.log(parsed)
        
        setProducts(parsed)
      } catch (err){
        console.log("there was an error", err);
      }
    };
    fetchProduct();

  }, []);

  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
      {products.map((oneProduct) =>{
        return (
          <Link to ={`/product/details/${oneProduct.id}`} key={oneProduct.id}>
          <div className="product-card" >
          <img src={oneProduct.image}/>
          <div className="product-details">
            <p><b>{oneProduct.title}</b></p>
            <p>{oneProduct.category}</p>
            <p>${oneProduct.price}</p>
         </div>
        
        </div>
        </Link>
      )})}
    </div>
  );
}

export default ProductListPage;
