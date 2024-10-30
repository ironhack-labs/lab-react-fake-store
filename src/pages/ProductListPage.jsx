import { useEffect, useState } from "react";
import axios from 'axios';


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:

  useEffect(()=>{
    axios.get(`https://fakestoreapi.com/products`)
    .then((response)=>{
      setProducts(response.data)
    })
    .catch(e=>console.log(e))
  },[]);

  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
      {products && products.map((product,index)=>{
        return(
          <div className="card" key={index}>
            <img className="content.shifted" src={product.image} alt={product.img} />
            <span className="flex-center">{product.title}</span>
            <span className="flex-center">{`$ ${product.price}`}</span>
            <span className="content">{product.description}</span>
          </div>
        )
      })}
    </div>
  );
}

export default ProductListPage;
