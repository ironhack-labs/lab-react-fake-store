import { useEffect, useState } from "react";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  const fetchProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products')
      if (response.ok) {
        const productsData = awaitresponse.json()
        console.log(productsData)
        setProducts(productsData)
      }
    }catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchProducts ()
  }, [])


  return (
    <div className="ProductListPage">
      {products.map(currentProduct => (
        <h4 key={currentProduct.id}>{currentProduct}.title}</h4>
      ))}
    </div>
  )
}

export default ProductListPage;
