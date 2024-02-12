import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductListPage() {

    // Useful const

    const [products, setProducts] = useState(null); //initialize the state by null 
    const listURL = "https://fakestoreapi.com"; //store the url
  
    // To fetch the list of products, set up an effect with the `useEffect` hook:
  
    useEffect(() => {
      axios.get(`${listURL}/products`) //call the url + products
      .then(response => { 
        setProducts(response.data) //set the products with the promise's data
      })
      .catch((e) => {
        console.log(e); // error
      })
    },[]) // empty array

  

  return (
    <div className="ProductListPage">

      {products !== null &&
      products.map((product, index) => {

        return (
          <div key={index} className="card">
            <img src={product.image} />
            <p className="content">{product.title} </p>

          <button className="btn-primary">
            <Link to={`./product/details/${product.id}`}>
              See more details
              </Link>
          </button>

          </div>
        )
      })
      }
    </div>
  );
}

export default ProductListPage;
