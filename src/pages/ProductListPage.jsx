import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  const fetchProducts = async() => {
    try {
      const response = await fetch('https://fakestoreapi.com/products')
      if(response.ok) {
        const productsData = await response.json()
        console.log(productsData)
        setProducts(productsData)
      }
    } catch (error){
      console.log(error)
    }
  }
  
  useEffect(() => {
    fetchProducts()
  }, [])


  return (
    <ul className="ProductListPage">
      {products.map(currentProduct =>(
        <li key = {currentProduct.id} style={{border:'1pz solid black', marginBottom:'1rem'}} >
        <Link to = {`/product/details/${currentProduct.id}`}>
        <h4>{currentProduct.title}</h4>
        </Link>

        </li>
      ))}
    </ul>
  );
}

export default ProductListPage;
