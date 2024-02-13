import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";



function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
    .then((response) =>{
        setProducts(response.data)
    })
    .catch((error) => {
        console.log(error)
    });
}, [])


  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
      {products && products.map((product) => {
        return (
          <div className="productClass" key={product.id}>
            <Link to={`/product/details/${product.id}`}><img className="product-img" src={product.image} alt="" /></Link>
            <Link to={`/product/details/${product.id}`}><h2>{product.title}</h2></Link>
            <h3>{product.category}</h3>
            <h3>{product.price}</h3>
            <p>{product.description}</p>
          </div>
        )
      })}
    </div>
  );
}

export default ProductListPage;
