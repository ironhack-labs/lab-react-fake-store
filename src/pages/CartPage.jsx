import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function CartPage() {
  const [cart, setCart] = useState({});
  const [cartProducts, setCartProducts] = useState([]);
  
  useEffect(()=>{
    fetch("https://fakestoreapi.com/carts/5")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const productFetches = data.products.map((product)=> {
        fetch(`https://fakestoreapi.com/products/${product.productId}`)
        .then((res) => res.json());
          return Promise.all(productFetches);

      })
      .then((allProducts) => {
        setCartProducts(allProducts);
      })
    })
  
    .catch((err)=>{
      console.error(err);
    })

  },[])
  console.log(cartProducts)
  
  return (
    <>
     <div >
          {/* Render list of products here */}
          {cartProducts.map((product)=>{
            return (
              
                <div key={product.id}>
                <img src={product.image} alt={product.title}/>
                <h4><strong>{product.title}</strong></h4>
                <h5>{product.category}</h5>
                <h4>${product.price}</h4>
                <p>{(product.description.length < 50 ? product.description : `${product.description.slice(0, 50)} ...`)}</p>
              </div>
              )
          })}
        </div>
    </>
    
    
  )
}

export default CartPage