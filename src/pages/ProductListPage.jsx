import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(()=>{

    axios.get("https://fakestoreapi.com/products").then((response)=>{
     const products = response.data     
     setProducts(products)    

      console.log(response);
    }).catch((error)=>{
      console.warn(error)
    })

  },[]);


  return (
    <div className="ProductListPage">
      {products.map((item)=>{
       return (
      <Link key={item.id} to={`/product/details/${item.id}`}>
       <div className="card">
       <img src={item.image} alt={item.title}/>
       <h2>{item.title}</h2>
       <div>{item.category}</div>
       <div>{item.price}$</div>   
       <div>{item.description}</div>
       </div>
       </Link>
       )
      } )}
    </div>
  );
}

export default ProductListPage;
