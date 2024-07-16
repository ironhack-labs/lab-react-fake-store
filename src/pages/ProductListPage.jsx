import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function ProductListPage() {
  
  const [products, setProducts] = useState([]);

useEffect(()=>{

  fetch('https://fakestoreapi.com/products')
            .then((response)=>{
            return  response.json()
            })
            .then((json)=>{
              setProducts(json)
            })
            .catch((error)=>{
              error
            })
}, [] )


  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).

  // To fetch the list of products, set up an effect with the `useEffect` hook:


  return (
    <div className="ProductListPage" >
      {products.map((eachProduct)=>{
        return(
          <Link key={eachProduct.id} to={`/product/details/${eachProduct.id}`}>
        <div className="card">
          <img src={eachProduct.image} alt="producto" />
          <h2>{eachProduct.title}</h2>
          <p>{eachProduct.price}</p>
          <p>{eachProduct.category}</p>
          <p>{eachProduct.description}</p>
        </div>
        </Link>
     )
      })}
    </div>
  );
}

export default ProductListPage;
