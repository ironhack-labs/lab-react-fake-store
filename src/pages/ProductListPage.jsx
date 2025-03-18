import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  useEffect(() => {
   async function getProducts() {
    try {
      const {data} = await axios('https://fakestoreapi.com/products')
      console.log(data)
      setProducts(data)
    } catch (error) {
      console.log(error)
    }
   }
   getProducts()
  }, [])

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  return (
    <div className="ProductListPage">
        {products.map((oneProduct) => {
        return ( 
          <Link to= {`/product/details/${oneProduct.id}`}>
          <div key={oneProduct.id}>
            <img src={oneProduct.image} />
            <p>{oneProduct.title}</p>
            <p>{oneProduct.category}</p>
            <p>{oneProduct.price}$</p>
            <p>{oneProduct.description}</p>
          </div>
          </Link>
        )
      })}
    </div>
  );
}

export default ProductListPage;
