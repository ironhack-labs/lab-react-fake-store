import { useState, useEffect } from "react";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);
  const fetchproducts = async () => {
    try{
      const response =  await fetch('https://fakestoreapi.com/products')
      if(response.ok){
        const productData = await response.json();
        console.log(productData)
        setProducts(productData)
      }
    }
    catch(error){
      console.log(error);
    }
  } 
  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect( () => {
    fetchproducts();
  }, []);

  return (
    <div className="container">
      {/* Render list of products here */
        products.map(currentProduct =>(
          <div key={currentProduct.id}>
            <h3>{currentProduct.title}</h3>
            <img src={currentProduct.image} alt={currentProduct.title} style={{ width: '100px' }} />
            <p>{currentProduct.description}</p>
            <p>{currentProduct.price}</p>
          
          </div>

        ))}
      
    </div>

  );
}

export default ProductListPage;
