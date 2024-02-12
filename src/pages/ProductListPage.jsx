//import { useState } from "react";
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const baseUrl = "https://fakestoreapi.com"
  const [products, setProducts] = useState([]);
  const [productId, setProductId] = useState(0);
  //const productId = useParams();

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    //https://fakestoreapi.com/products
    axios.get(`${baseUrl}/products`)
            .then(response => {
              console.log('response.data ',response.data);
                //setCharacters(response.data);
                setProducts(response.data)
                //setProductId(response.data[1])
            })
            .catch(e => {
                console.log("Error getting characters from the API...");
                console.log(e);
            });
    //trying to get the :id from the url
    axios.get(`${baseUrl}/products/details/${productId}`)
    .then(response => {
      console.log('response.data ',response.data);
        setProductId(response.data)
    })
    .catch(e => {
        console.log("Error getting characters from the API...");
        console.log(e);
    });
      
  }, [productId] );

  return (
    <div className="ProductListPage">
      {/* list of products here */}
      {products === null
                ? <h2>Loading....</h2>
                : <h2>Number of products in our API: {products.length}</h2>
            }

            {products !== null &&
                products.map((productDetails, index) => {
                  
                    return (
                     
                        <div key={index} className="character box">
                            <div><Link to="/product/details/:productId"> <b>{productDetails.title}</b></Link> </div>
                            <div> {productDetails.price} </div>
                            <div> {productDetails.description} </div>
                            <div> <img src={productDetails.image} alt="other"  /> </div>
                                             
                        </div>
                    )
                })}
    </div>
  );
}

export default ProductListPage;
