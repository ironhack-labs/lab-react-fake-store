import { useEffect, useState } from "react";




function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);
  

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  async function getProducts() {
    try {
      const response = await fetch('https://fakestoreapi.com/products')
      .then(res=>res.json())
      .then(json=>console.log(json))


      const jsonResponse = await response.json();
      setProducts(jsonResponse);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);
  


  return (
    <div className="ProductListPage">
      {products.map((product) => {
        return
      })/* Render list of products here */}
    </div>
  );
}

export default ProductListPage;
