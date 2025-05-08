import { useEffect, useState } from "react";
import axios from "axios";
import "./ProductListPage.css"
import { Link } from "react-router-dom";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then(Response => {
        setProducts(Response.data)
      })
      .catch(err => console.log(err))
  })

  return (
    <div className="ProductListPage">
      {products.map(elm => {
        return (
          <Link to={`/product/details/${elm.id}`}>
            <article key={elm.id} className="articleCard">
              <img src={elm.image} className="imageProduct"></img>
              <div className="titleCard">{elm.title}</div>
              <div className="categoryCard">{elm.category}</div>
              <div className="priceCard">${elm.price}</div>
              <div className="descriptionCard">{elm.description.slice(0, 30)}</div>
            </article>
          </Link>
        )
      })}
    </div>
  );
}

export default ProductListPage;
