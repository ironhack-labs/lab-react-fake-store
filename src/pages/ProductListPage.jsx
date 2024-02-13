import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:

  useEffect(()=>{

    axios.get("https://fakestoreapi.com/products")
    .then((response)=>{
      setProducts(response.data)
      //console.log(response.data)
    })
    .catch((error)=>{console.log(error)})
  }, []);

  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
      {products && products.map((item)=>{
        return(
          <article key={item.id}>
            <Link to={`/product/details/${item.id}`}>
              <img src={item.image}/>
              <h3>{item.title}</h3>
              <p>{item.category}</p>
              <p>{item.price}</p>
              <p>{item.description}</p>
            </Link>
          </article>
        )
      })}

    </div>
  );
}

export default ProductListPage;
