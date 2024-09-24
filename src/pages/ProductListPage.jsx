import { useState, useEffect } from "react";
import {Link} from "react-router-dom";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
    .then((response)=>{
      return response.json()
    })
    .then((data)=>{
      console.log(data)
      setProducts(data)
    })
    .catch((error)=>{
      console.log(error)
    })
  }, [])


  return (
    <div className="ProductListPage">
      <ul>
      {products.map((eachProduct)=>{
        return(
          <li key={eachProduct.id} className="lista">
          <h1>{eachProduct.title}</h1>
          <img src={eachProduct.image} alt="imagen producto" width="100px" />
          <h3><strong> Categoria: </strong>{eachProduct.category}</h3>
          <h3><strong>Precio:</strong> {eachProduct.price} </h3>
          <h3><strong>Descripción del producto:</strong> {eachProduct.description}</h3>
          <Link to={`/product/details/${eachProduct.id}`}> 
          <button style={{color:"green"}}>Ver producto </button> </Link>

          </li>
           );
      })}
      </ul>
    </div>
  );
}

export default ProductListPage;
