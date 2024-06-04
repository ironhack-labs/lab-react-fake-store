import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:

  useEffect(() =>{
    const fetchProducts = async() => {
      try {
        const res = await fetch("https://fakestoreapi.com/products")
        const data = await res.json()
        setProducts(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchProducts()
  }, [])

  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
      {products && products.map((oneProduct)=>{
        return(
          <ProductCard key={oneProduct.id} product={oneProduct}/>
        )
      })}
    </div>
  );
}

export default ProductListPage;
