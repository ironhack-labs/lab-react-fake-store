import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then(response => {
        setProducts(response.data)
        setIsLoading(false)
      })
      .catch(err => console.log(err))

  }, [])

  return (
    <div className="ProductListPage container mx-auto">
      <ul className="list-none">
        {
          isLoading
            ? <h2>Loading products...</h2>
            : products.map(product => {
              return <ProductCard key={product.id} {...product} />
            })
        }
      </ul>
    </div>
  );
}

export default ProductListPage;
