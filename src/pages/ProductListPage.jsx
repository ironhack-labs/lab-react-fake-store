import { useEffect, useState } from "react";
import axios from "axios";
import { Axios } from "axios";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    })
  }, [])


  return (
    <div className="ProductListPage">
      <h2>Categoria: </h2>
      {products.map((product, index) => (
        <li key={index}>
          <h3>{product.data[0]}</h3>
        </li>
      ))}
    </div>
  );
}


export default ProductListPage;
