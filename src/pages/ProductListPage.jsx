import { useState } from "react";
import { useEffect } from "react";
import axios from "axios"
import { Link } from "react-router-dom";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);
  
  

// To fetch the list of products, set up an effect with the `useEffect` hook:
useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
    .then((res) => {
      console.log(res.data)
      setProducts(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])

  //



  return (
    <div className="ProductListPage">{products.map((product) =>  {
      return (
      <div key={product.id} className="card">
        <Link to={`/product/details/${product.id}`}>
          <div>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <img src={product.image} alt={product.title} style={{ maxWidth: '100px' }} />
    </div> 
    </Link>
    </div>
      )  
  }
    
      
    )}
    </div>
  );
  
}
export default ProductListPage;
