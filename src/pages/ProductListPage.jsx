import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then((response) =>response.json())
    .then((data) => setProducts(data))
    .catch((error) => console.log(error))

  }, []);

  return (
    <div className="ProductListPage">
    <ul>
      {products.map((product) => (
        <Link key={product.id} to={`/product/details/${product.id}`}> 
        <li>        
        <h5>{product.title}</h5>
        <p>{product.description}</p>
        <p>{product.price}</p>
        <img src={product.image} style={{ width: "200px", height: "200px", margin: "50px"}}/>
         </li>
        </Link>
      ))}
    </ul>

  
   
    </div>
  );
}

export default ProductListPage;
