import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  const getAllProducts = () => {
    axios.get("https://fakestoreapi.com/products")
      .then((response) => {
        console.log(response.data)
        setProducts(response.data)})
      .catch((error) => console.error(error))
  }

  useEffect(() => {
    getAllProducts();
  }, []) 
  
  return (
    <div className="ProductListPage">
        {products && products.map((product) => (
          <Link to={`/product/details/${product.id}`} key={product.id}>
            <div  className="flex-center text-center container">
              <img src={product.image} alt={product.title} className="card"/>
              <h1 className=""><strong>{product.title}</strong></h1>
              <div className="">{product.category}</div>
              <div className="">${product.price}</div>
              <div className="">{product.description}</div>
            </div>
          </Link>
        ))}
    </div>
  );
}

export default ProductListPage;
