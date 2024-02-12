import { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);


  // To fetch the list of products, set up an effect with the `useEffect` hook:

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products`)
      .then((response) => {
        console.log(response);
        setProducts(response.data);
      }).catch((e) => {
        console.log(" Error caming from products of API")
      });

  }, [])


  return (
    <div className="ProductListPage">

      {products === null
        ? <h2> loading</h2>
        : <h2> Number of products in our Website : {products.length} </h2>
                 
           
            }

      {products !== null && products.map((productsDetails, index) => {
        return (
          <Link to= {` ./product/details/:${productsDetails.id } ` }> 
          <div key={products.id} className="product box">
            <img src={productsDetails.image} />
            <div className="product-details"></div>
            <p className="title"> {productsDetails.title}</p>
            <p className="category">  {productsDetails.category}</p>
            <p className="price"> {productsDetails.price}</p>
            <p className="desciption"> {productsDetails.description}</p>
            
          </div> </Link>

     
  )

})}
</div>
    );
 }

export default ProductListPage;
