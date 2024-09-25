import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductDetailsPage from "./ProductDetailsPage";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setProducts(data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  if (products === undefined) {
    return <p>...</p>
  }

  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
      {products.map((eachProduct) => {
        return (
          <ul key={eachProduct.id}>
            <Link to={`/product/details/${eachProduct.id}`}>
              <li>
                <img style={{ width: '20vh' }} src={eachProduct.image} alt=''></img>
                <p>{eachProduct.title}</p>
                <p>{eachProduct.category}</p>
                <p>{eachProduct.price}</p>
                <p>{eachProduct.description}</p>
              </li>
            </Link>
          </ul>
        )
      })}
    </div>
  );
}

export default ProductListPage;
