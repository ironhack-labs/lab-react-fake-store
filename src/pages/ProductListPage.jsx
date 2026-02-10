import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
    .then((response) => {
      return response.json()
    })
    .then((response) => {
      console.log(response)
      setProducts(response)
    })
    .catch((error) => {
      console.log(error)
    })
  }, [])

  return (
    <div className="ProductListPage">
      <br />
      {products.map((product) => {
        return(
          <Link to={`/product/details/${product.id}`} className="product-list-row" key={product.id}>
            <img src={product.image} alt="product" />
            <p className="title">{product.title}</p>
            <p>{product.category}</p>
            <p>${product.price}</p>
            <p>{product.description}</p>
          </Link>
        )
      })}
    </div>
  );
}

export default ProductListPage;
/*
category: "men's clothing"
description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
id: 1
image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
price: 109.95
rating: {rate: 3.9, count: 120}
title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"*/