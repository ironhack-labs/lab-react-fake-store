import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
useEffect(()=>{
  const fetchProducts = ()=>{
    fetch("https://fakestoreapi.com/products")
    .then((res)=>{
      console.log("this is what fetch gives us to begin", res)
      return res.json()
    })
    .then((data)=>{
      console.log("here is the actual data", data)
      setProducts(data)
    })
    .catch((err)=> console.log(err))
  }
  fetchProducts()
}, [])


if (products.length === 0){
  return <p>loading....</p>
}
  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
        {products.map((oneProduct)=>{
          return (
          <Link key={oneProduct.id} to={`/product/details/${oneProduct.id}`}>
          <div className="product-card">
            <img src={oneProduct.image}
            alt={oneProduct.title}
            style={{width: "80px"}}/>
            <h3>{oneProduct.title}</h3>
            <p>{oneProduct.category}</p>
            <p>${oneProduct.price}</p>
            <p>{oneProduct.description}</p>
          </div>
          </Link>
          )
        })}
      
    </div>
  );
}

export default ProductListPage;
