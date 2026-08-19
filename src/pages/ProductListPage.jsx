import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(()=> {
    getData()
  },[])

  const getData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products")
      setProducts(response.data)
    }catch(e) {
      console.log(e)
    }
  }

  return (
    <div className="ProductListPage" >
      {products.map((product) => {
        return (
        <Link to={`product/details/${product.id}`} className="card" key={product.id}>
          <img src={product.image} width={100}/>
          <p> {product.title}</p>
          <p> {product.category}</p>
          <p> {product.price}</p>
          <p> {product.description.slice(0, 40)}</p>
        </Link>)
      })}
    </div>
  );
}

export default ProductListPage;
