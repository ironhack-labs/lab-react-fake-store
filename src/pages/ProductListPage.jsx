import { useEffect } from "react";
import { useState } from "react";
import axios from "axios"
import { Link } from "react-router-dom";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:


  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data)
      })
      .catch((err) => {
        console.log(err)
      })

  },[])


  return (
    <div className="ProductListPage">
      {products.map((product) => {
        return (
          <Link key={product.id} to={`/products/${product.id}`} >
          <div className="card">
            {product.image && 
            <div className="card-image">
                <img src={product.image}/>
            </div>
              } 
            <h4>{product.title}</h4>
            <p>{product.category}</p>
            <p>{product.price} $</p>
            <p>{product.description.slice(0,50)}</p>
          </div>
          </Link>
        )
      })}
    </div>
  );
}

export default ProductListPage;
