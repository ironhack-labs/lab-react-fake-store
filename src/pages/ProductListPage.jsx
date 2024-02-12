import { useState, useEffect } from "react";
import axios from "axios";
//import { json } from "react-router-dom";
import { Link } from "react-router-dom"; 



function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(`https://fakestoreapi.com/products`)
      setProducts(request.data)
    }
    fetchData(); 
  }, []);

console.log(products)

  return (
    <div className="ProductListPage">
      {products.map(product => (
        <div key={product.id}> 
        <img src={product.image} alt={product.title} />
        <h3> {product.title} </h3>
        <h3> {product.category} </h3>
        <h3> {product.price} </h3>
        <h3> {product.description} </h3>
        <Link to={`./product/details/${product.id}`}>More Details</Link>
        </div>
      ))}
    </div>
  );
}


export default ProductListPage;
