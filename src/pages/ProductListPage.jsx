import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (products === null) {
    return <h3>Buscando la información</h3>
  }

return(
  <div className="ProductListPage">
    {products.map((eachProduct) => {
      return (
        <Link to={`/product/details/${eachProduct.id}`}> 
      <div className="card" key={eachProduct.id}>
        {/* Render list of products here */}
        <img src={eachProduct.image} width="100px" />
        <p>{eachProduct.title}</p>
        <p>{eachProduct.price}</p>
        <p>{eachProduct.category}</p>
        <p>{eachProduct.description}</p>
      </div>
      </Link>
    );
  }
  )};
</div>
)

  
}

export default ProductListPage;
