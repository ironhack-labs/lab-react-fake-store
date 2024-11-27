import { useState } from "react";
import { useEffect } from "react";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:

  async function getProducts() {
    try {
      const response = await fetch('https://fakestoreapi.com/products')
      .then(res=>res.json())
      .then(json=>console.log(json))

      const jsonResponse = await response.json();
      setProducts(jsonResponse.items);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ul className="ProductListPage">
      {products && products.map((eachProduct) => {
      <li className="product" key={eachProduct.id}>
          <img src={eachProduct.image} alt={eachProduct.name} />
          <h3>{eachProduct.name}</h3>
        </li>
      
    })}
    </ul>
  );

}

export default ProductListPage;


