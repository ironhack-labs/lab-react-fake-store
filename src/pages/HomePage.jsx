//Iteration 1 | Products List

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function HomePage() {

  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {

    fetch('https://fakestoreapi.com/products')
      .then((response) => {
        return response.json()
      })
      .then((jsonResponse) => {
        setProducts(jsonResponse)
      })
      .catch((error) => { error })
  }, [])



  //Iteration 2 | Product List Links
  return (
    <div className="HomePageList">
      <h2> List of products</h2>
      {products.map(product => {
        return (
          <Link key={product.id} to={`/product/details/${product.id}`}>
            <ul>
              <li> {product.title} </li>
              <li> {product.price} </li>
              <li> {product.cathegory} </li>
              <li> <img src={product.image} alt="productImage" /> </li>
            </ul>
          </Link>
        )

      })}
    </div>
  );
}

export default HomePage;
