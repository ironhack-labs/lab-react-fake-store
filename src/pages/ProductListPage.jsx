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
      /* console.log(response) */
      setProducts(response)
    })
    .catch((error) => {
      /* console.log(error) */
    })
  }, [])

  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
      {products.map((eachProduct) => {
        /* console.log(eachProduct) */
        return(
          <Link to={`/product/details/${eachProduct.id}`}>
          <div key={eachProduct.id} className="card">
            <img src={eachProduct.image} alt="imagen producto" />
            <p>{eachProduct.title}</p>
            <p>{eachProduct.category}</p>
            <p>{eachProduct.price}</p>
            <p>{eachProduct.description}</p>
          </div>
          </Link>
        )
      })}
    </div>
  );
}

export default ProductListPage;
