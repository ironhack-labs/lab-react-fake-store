import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState(null);

  // To fetch the list of products, set up an effect with the `useEffect` hook:

  useEffect(()=>{

    axios
    .get("https://fakestoreapi.com/products")
    .then((response)=> {setProducts(response.data)})
    .catch((error)=> console.log(error))
  }, [])

  return (
    <div className="ProductListPage">
      {products && products.map((product)=> {
        return (
        <Link to={`/product/details/${product.id}`}>  
        <article key={product.id} style={{border: "1px solid black", display: "flex", flexWrap: "wrap", marginBottom: 10, justifyContent: "center", alignItems: "center"}}>
          <img src={product.image} style={{width: 200, height: 200, border: "1px solid grey", margin: 15}}></img>
          <h3 style={{width: 150, margin: 20}}>{product.title}</h3>
          <p style={{width: 150, margin: 20}}>{product.category}</p>
          <p style={{width: 150, margin: 20}}>{product.price}€</p>
          <p style={{width: 300, margin: 20}}>{product.description}</p>
        </article>
        </Link>
        )
      })}
    </div>
  );
}

export default ProductListPage;
