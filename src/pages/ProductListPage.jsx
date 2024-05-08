import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // const [dataLoaded, setDataLoaded] = useState(false)

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
    .then((response) => {
      setProducts(response.data)
      // setDataLoaded(true) // this only works with a state variable... 
      // because we invoke the entire component again after we changed state with setProducts()
    })
    .catch((error) => {
      console.log(error)
    })
  }, [])


  return (
    <div className="product-list">
      {/* Render list of products here */}
      { products.length > 0 && products.map(element => {
        return (
        <Link to={`/product/details/${element.id}`}>
        <div className="card product" key={element.id}>
          <img src={element.image}/>
          <span><b>{element.title}</b></span>
          <span>{element.category}</span>
          <span>${element.price}</span>
          <span>{element.description.slice(0,60)}</span>
        </div>
        </Link>

        )
      })}

    </div>
  );
}

export default ProductListPage;
