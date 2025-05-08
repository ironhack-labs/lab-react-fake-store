import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard/ProductCard";

function HomePage({ productsURL }) {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductList()
  }, [])

  const getProductList = () => {
    axios
      .get(productsURL)
      .then(response => {
        setProducts(response.data)
      })
      .catch(err => `Error (${err}) al cargar los productos.`)
  }

  // To fetch the list of products, set up an effect with the `useEffect` hook:


  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
      {products.map(product => <ProductCard key={product.id} {...product} />)}
    </div>
  );
}

export default HomePage;
