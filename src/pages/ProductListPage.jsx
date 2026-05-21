import { useState, useEffect } from "react";
import {Link} from "react-router-dom";



function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);
  // To fetch the list of products, set up san effect with the `ueEffect` hook:
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then((resolve)=>{
      if(!resolve.ok) throw new Error ('Network response was not okay');
      console.log(resolve)
      return resolve.json();
    })
    .then((data)=>{
      setProducts(data);
      setLoading(false);
    })
    .catch((error)=>{
      setError(error.message);
      setLoading(false);
      console.log(error);
    })
  },[]) //makes code run once only!
  if (loading) return <p>Loading products...</p>
  if (error) return <p>Error: {error}</p>
  return (
    <div className="ProductListPage">
      <ul>
        {products.map((prod)=>(
          <li key={prod.id}>
            <Link to={`/product/details/${prod.id}`}>
            <img src={prod.image} alt={prod.title} style={{ width: '10%' , objectFit: "contain"}}/>
            <h3>{prod.title}</h3>
            <p>{prod.category}</p>
            <p>{prod.price}</p>
            <p>{prod.description}</p>
          </Link>
          </li>
          
        ))}
      </ul>
    </div>
  );
}

export default ProductListPage;
