import { useEffect } from "react";
import { useState } from "react";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then((response) => response.json())
        .then((productsJson) => setProducts(productsJson))
        .catch((error) => console.log(error))
  }, [])

console.log(products);

  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
      <ul>
        {products.map((product, index )=> {
          return(
          <>
            <li key={index+'.'+product.id}><img src={product.image} alt={product.title} /></li>
            <li key={index+'.'+product.id}>Title: {product.title}</li>
            <li key={index+'.'+product.id}>Description: {product.description}</li>
            <li key={index+'.'+product.id}>Price: {product.price}</li>
            <li key={index+'.'+product.id}>Rating: {product.rating.rate}</li>
          </>
          )
        })}
      </ul>
    </div>
  );
}

export default ProductListPage;
