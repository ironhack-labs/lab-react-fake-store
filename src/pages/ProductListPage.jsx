import axios from "axios";
import { useEffect, useState } from "react";
import ProductDetailsPage from "./ProductDetailsPage";
import ProductCard from "./ProductCard";

const apiURL = 'https://fakestoreapi.com/products'

function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState();
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getAllProducts()
  }, [])

  const getAllProducts = () => {
    axios
      .get(apiURL)
      .then(response => {
        setProducts(response.data)
        setIsLoading(false)
      })
      .catch(err => alert('ERROR, NO SE PUEDE MOSTRAR LA LISTA'))
  }

  // To fetch the list of products, set up an effect with the `useEffect` hook:


  return (
    <div className="ProductListPage">
      {
        isLoading ? <h1>LOADING...</h1> : products.map(eachProduct => {
          return (
            <ProductCard key={eachProduct.id} {...eachProduct} />
          )
        })
      }
    </div>
  );
}

export default ProductListPage;
