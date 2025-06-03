import { useEffect, useState } from "react";
import axios, { Axios } from "axios";
import { Link, useParams } from "react-router-dom";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);
  const {product} = useParams();

  useEffect (()=>{
    axios.get("https://fakestoreapi.com/products")
    .then((response) => {
     console.log(response)
     setProducts(response.data);
      })
     
    
    .catch((error) => {
      // Handle error
      console.log(error);
    })
  }, [])


  return (
    <div className="ProductListPage">
      {products.map((oneProduct)=>{
        return  <Link to={`/product/details/${oneProduct.id}`} key={oneProduct.id}> 
        <div className="product-card" >
          <img  src={oneProduct.image} alt="{oneProduct.title}"/>
          <h1 className="product-name" >{oneProduct.title}</h1>
          
          <h2 className="product-category">{oneProduct.category}</h2>
          <h2 className="product-price">${oneProduct.price}</h2>
          <h4 className="product-description">{oneProduct.description}</h4>
        </div>
        </Link>
      })}
    </div>
  );
}

export default ProductListPage;
