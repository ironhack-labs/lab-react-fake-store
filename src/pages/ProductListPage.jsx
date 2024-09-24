import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);


  // To fetch the list of products, set up an effect with the `useEffect` hook:

  useEffect (() => {
    fetch("https://fakestoreapi.com/products")
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      setProducts(data)
    })
    .catch((error) => {
      console.log(error)
    })
  }, [])

  return (
    <ul className="ProductListPage">
      {/* Render list of products here */}
      {products.map((eachProduct, index) => {
        return (
          <li key={index} className="card flex-center">
          <Link to={`/product/details/${eachProduct.id}`}>
            <h5 style={{fontWeight:"bold"}}>{eachProduct.title}</h5>
          <img src={eachProduct.image} alt="logo" style={{width:"50px"}}/>
          <p>{eachProduct.category}</p>
          <p>${eachProduct.price}</p>
          <p>{eachProduct.description}</p>
          </Link>
          </li>
          
        )
      })}
    </ul>
  );
}

export default ProductListPage;
