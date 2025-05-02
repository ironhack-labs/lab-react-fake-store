import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
  .then((response) => {
    return response.json()})

  .then((data) => {
    setProducts(data);
    
  })
  .catch((err)=>console.log(err));
  },[])
//use another useEffect to render array after setProducts updates products
  // useEffect(()=>{
  //   console.log("this is products array", products)
  //   },[products])
  

  return (
    <div className="ProductListPage">
      {products.map((oneProduct)=>{
        return(
          <Link to={`/product/details/${oneProduct.id}`} key = {oneProduct.id}>
          <div className = "card">
            <img src={oneProduct.image} alt="Product Image" />
            <div>{oneProduct.title}</div>            
            <div>{oneProduct.category}</div>
            <div>{oneProduct.description}</div>
            <div>{oneProduct.price}</div>
          </div>
          </Link>
        )
      })}
    </div>
  );
}

export default ProductListPage;
