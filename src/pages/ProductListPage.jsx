import { useEffect } from "react";
import { useState } from "react";
import ProductCard from '../components/ProductCard'


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    async function asyncEffect(){
      try {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log(error)
      }
    }
    asyncEffect();
  }, [])
  console.log(products)

  return (
    <div className="ProductListPage">
      {products.map(product => {
        return <ProductCard key={product.id} id={product.id} title={product.title} image={product.image} category={product.category} description={product.description} price={product.price}/>
      })}
    </div>
  );
}

export default ProductListPage;
