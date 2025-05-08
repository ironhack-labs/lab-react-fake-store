import { useEffect, useState } from "react";
import "./ProductlistPage.css"
import { Link } from "react-router-dom";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json()) // the fetch doesn't return the JSON directly. We need this step, and it's also a promise
      .then((jsonData) => {

        setProducts(jsonData)
      })
  }, [])

  return (<div className="ProductListPage">


    {
      products.map((eachProduct, index) => {
        return <li className="Product-container">
         <Link to={`/product/details/${eachProduct.id}`}>  <div className="card">
           <div className="block">

            <img src={eachProduct.image} alt="" />
            </div>
            <div className="block">

              <h3>{eachProduct.title}</h3>
            </div>
            <div className="block">
              <h4>{eachProduct.category}</h4>

            </div>
            <div className="block">

              <h4>{eachProduct.price}</h4>
            </div>
            <div className="block">

              <h4>{eachProduct.description}</h4>
            </div>


          </div></Link>
        </li>
      })
    }
  </div>
  );
}

export default ProductListPage;
