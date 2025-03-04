import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
    .then((response)=>{
      return response.json();
    })
    .then((data)=>{
      setProducts(data)
    })
    .catch((error)=>{
      console.log(error);
    })
  }, [])

  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
      
      {products.map((eachProduct)=>{
        
        return(
          <Link key={eachProduct.id} to={`/product/details/${eachProduct.id}`} style={{ margin:"20px"}}>
            <div style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between",  border: "1px solid #000", padding:"10px"}}>
            <img src={eachProduct.image} width="150px" style={{ border: "1px solid #000"}}/>
            <h2 style={{width:"250px"}}><strong>{eachProduct.title}</strong></h2>
            <h3>{eachProduct.category}</h3>
            <p>${eachProduct.price}</p>
            <p style={{display:"inline-block", justifyContent:"center", width:"250px"}}>{eachProduct.description}</p>
            </div>
          </Link>
        )
      })}
    </div>
  );
}

export default ProductListPage;
