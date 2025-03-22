import { useEffect, useState } from 'react';

export const Cart = () => {
  const [cart, setCart] = useState(null);
  const cartId = 6;

  useEffect(() => {
    fetch(`https://fakestoreapi.com/carts/${cartId}`)
      .then((response) => response.json())
      .then((data) => setCart(data)) // do the mapping directly in here. Do curly braces.
      .catch((err) => console.log(err));
  }, [cartId]);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  useEffect(() => {
    if (cart.product !== null) {
      const ProductIdArray = cart.products.map((product) => product.id);
      console.log(ProductIdArray);
    }
  }, [cart]);

  // useEffect(()=>{
  //     fetch(`https://fakestoreapi.com/products/${cart.id}`)
  //     .then(response => response.json())
  //     .then(data => setProduct(data))
  //     .catch((err)=>console.log(err))
  //     },[productId])

  return <div></div>;
};
