import { useState,useEffect } from "react";
import { Link } from "react-router-dom";



function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);


  // To fetch the list of products, set up an effect with the `useEffect` hook:

   useEffect(()=>{

fetch(`https://fakestoreapi.com/products/`)
.then(response=>response.json())
.then(data=>setProducts(data))
.catch(error=>console.log(error))

  },[])



  return (


    <div className="ProductListPage">
         
  {  products.map((product) =>(
    <Link to={`/product/details/${product.id}`}>
    <h1>{product.title}</h1>
<p>{product.price}</p>
<p>{product.description}</p>
<p>{product.category}</p>
<img src={product.image} />
   </Link>


     ))}

       </div>


  

   
  );
}

export default ProductListPage;
