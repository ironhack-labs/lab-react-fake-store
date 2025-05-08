import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then(res => setProducts(res.data))
      .catch(err => console.log(err))
  } , []);

  


  return (
    <div className="ProductListPage">
      {products.map(product =>{
        return <Link to={`/product/details/${product.id}`} className="flex-center card" key={product.id}>
          <div>{product.image}</div>
          <div>{product.title}</div>
          <div>{product.category}</div>
          <div>{product.price}</div>
          <div>{product.description}</div>
        </Link>
      } 
      )}
    </div>
  );
}

export default ProductListPage;
