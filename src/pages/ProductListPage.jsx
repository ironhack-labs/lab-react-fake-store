import { useState, useEffect } from "react";
import axios from "axios";

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
      <div className="listCard" key={eachProduct.id}>
        {/* Render list of products here */}
        <img src={eachProduct.image} />
        <p>{eachProduct.title}</p>
        <p>{eachProduct.price}</p>
        <p>{eachProduct.category}</p>
        <p>{eachProduct.description}</p>
      </div>
    );
  }
  )};
</div>
)

  
}

export default ProductListPage;
