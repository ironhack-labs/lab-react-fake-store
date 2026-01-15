import { useState, useEffect } from "react";
import axios from "axios"
import { useParams, Link } from "react-router-dom";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);
 

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  const fetchProducts = async () => {
    const response = await axios.get(
      "https://fakestoreapi.com/products"
    )
    
    setProducts(response.data)
    console.log(response.data)
    
  }


  useEffect(()=>{
    fetchProducts();
  
  }, [])


  
  return (
    <div className="ProductListPage">
  {products.map((oneProduct)=>{
    return <div className="flex-center">
    <img src={oneProduct.image}/>
    <Link to={`/product/details/${oneProduct.id}`}>
    <h1>{oneProduct.title}</h1>
    </Link>
    <p>{oneProduct.category}</p>
    <p>{oneProduct.price}</p>
    <p>{oneProduct.description}</p>
    </div>
  })}    
    </div>
  );
}

export default ProductListPage;
