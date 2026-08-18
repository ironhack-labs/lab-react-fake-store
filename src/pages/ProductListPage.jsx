import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [ products, setProducts ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true)

  // To fetch the list of products, set up an effect with the `useEffect` hook:

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
    .then((response) => {
      return response.json()
    })
    .then((response) => {
        setProducts(response)
        setIsLoading(false)
      // }, 1500)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])

  return (
    <div className="ProductListPage">

      {!isLoading ? (
        products.map((product) => {
        return (
     <Link key={product.id} to={`/product/details/${product.id}`}>
        <img src={product.image} alt={product.title} height="200px" width="200px"/>
        <h4>{product.title}</h4>
      <p>${product.price}</p>
       <p>${product.description}</p>

      </Link>
      )
    })
  ) : (
    <h3>Loading...</h3>
  )}
    </div>
  );
}

export default ProductListPage;
