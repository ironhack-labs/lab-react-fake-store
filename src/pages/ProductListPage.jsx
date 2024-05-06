import { useEffect, useState } from "react";
import axios from 'axios'
import ProductsCard from "../components/ProductsCard/ProductsCard";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState();
  const [isLoading, setIsLoading] = useState(true);


  // To fetch the list of products, set up an effect with the `useEffect` hook:

  const apiUrl = "https://fakestoreapi.com/products"

  useEffect(() => {
    getAllProducts()
  }, [])

  const getAllProducts = () => {
    axios
      .get(apiUrl)
      .then(response => {
        setProducts(response.data)
        setIsLoading(false)
      })
      .catch(err => console.log('Error recibiendo los productos'))
  }




  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
      {
        isLoading
          ?
          <p>LOADING.......</p>
          :
          products.map(eachProducts => {
            return (
              <ProductsCard key={eachProducts.id} {...eachProducts} />
            )
          })
      }
    </div>
  );
}

export default ProductListPage;
