import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductListPage() {

  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState(null);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products`)
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => console.log("Error getting the product list from the API"))
  }, []);

  return (
    <>
      <div className="ProductListPage">
        {products && products.map((element) => {
          return (
            <div className="card" key={element.id}>
              <Link to={`/product/details/${element.id}`} className="ProductListPage">
                <img src={element.image} alt={element.title} />
                <h3>{element.title}</h3>
                <p>{element.category}</p>
                <p>{element.price}€</p>
                <p>{element.description}</p>
              </Link>
            </div>
          )
        })}
      </div>

    </>
  )

}

export default ProductListPage;
