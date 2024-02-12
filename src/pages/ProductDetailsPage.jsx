import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';


function ProductDetailsPage() {
  const {productId} = useParams(); // get the ID
  const [product, setProduct] = useState(null); // state null
  
  useEffect (() => {
    axios.get(`https://fakestoreapi.com/products/${productId}`) //get each details of each Id called
    .then ((response) => {
      setProduct(response.data)
    }).catch((e) => { console.log (e)})
  }, [productId]);

  const renderDetails = () => {
    return (
      <div>
      <label>{product.category}</label>
      <h3>{product.title}</h3>
      <img src={product.image} />
      <p className="content">{product.description}</p>
      <p>{product.price} $</p>
      </div>
    )
  }

  return (
    <div className="ProductDetailsPage">
      { product === null
      ? <h2> In progress </h2>
      : renderDetails()
      }
    </div>
  );
}

export default ProductDetailsPage;
