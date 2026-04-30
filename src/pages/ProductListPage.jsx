import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <div className="ProductListPage">
      {products.map((product)=>{
        return <Link to={`/product/details/${product.id}`} key={product.id}> <div style={{display: "flex", padding:"20px", margin:"20px", backgroundColor:"white", maxHeight: "150px", overflow: "hidden"}}>
          <img src={product.image} style={{width:"100px", minWidth: "100px", height: "100px", objectFit: "cover", border: "1px solid gray", padding: "2px", marginRight:"50px"}}/>
          <h3 style={{marginRight:"50px"}}><strong>{product.title}</strong></h3> 
          <p style={{marginRight:"50px"}}>{product.category}</p>
          <p style={{marginRight:"50px"}}>${product.price}</p>
          <p style={{maxWidth:"200px", marginLeft:"50px"}}>{product.description}</p>
          </div> </Link>
      })}
    </div>
  );
}

export default ProductListPage;
